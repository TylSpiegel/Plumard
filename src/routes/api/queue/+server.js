import prisma from "/src/lib/prisma";
import {fail, redirect, json} from "@sveltejs/kit";

export const POST = (async ({ request }) => {

    const now = new Date()
    const { token, writing } = await request.json()
    // check lastping => if lastping > 25 seconds && waiting : delete
    await prisma.session.deleteMany({
        where : {
            AND : [
                { waiting : true  },
                { lastPing : {
                        lt: new Date(Date.now() - 1000 * 6)
                    }
                }
            ]
        },
    })
    await prisma.session.deleteMany({
        where : {
            AND : [
                { writing : true  },
                { lastPing : {
                        lt: new Date(Date.now() - 1000 * 6)
                    }
                }
            ]
        },
    })
    if (writing) {
        await prisma.session.update({
            where : {
                token : token
            },
            data : {
                lastPing: now
            }
        })
        return json('OK')
    }

    // Check if seat is available and first in the queue
    const isSomeoneWriting = await prisma.session.findMany({
        where : {
            writing : true
        }
    })

    const queue = await prisma.session.findMany({
        where : {
            waiting : true,
            writing : false
        },
        orderBy : {
            createdAt : 'desc'
        }
    })

    // find if oldest & no one is writing
    const ready  = queue[0].token === token && isSomeoneWriting.length === 0
    if (ready) {
        await prisma.session.update({
            where: {token: token},
            data: {
                waiting: false,
                writing : true,
                lastPing : now
            }
        })
        } else {
        await prisma.session.update({
            where : { token : token },
            data : { lastPing : now }
        })
    }

    return json({
        queue : queue.length,
        writing : ready,
        writer : isSomeoneWriting
    })

});
