import prisma from "/src/lib/prisma";
/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').Actions} */

import {fail, redirect} from "@sveltejs/kit";
import {getToday} from "/src/lib/utils.js";

export const load = (async ()  => {

    const queue = await prisma.session.findMany({
        where : {
            waiting : true,
            writing : false
        },
        orderBy : {
            createdAt : 'asc'
        }
    })
    
    const poem = await prisma.DailyPoem.findFirst( {
        where : {
            publish_date : {
                equals : getToday(),
            },
            finished : false
        }
    })
    
    if (!poem) {
        return {
            poem : false
        }
    }

    const lastVerse = await prisma.verse.findMany({
        where : {
            poemId : poem.id
        },
        
        orderBy : {
            id : 'desc'
        },
        take : 1
    })
    
    const amountOfVerse = await prisma.verse.count( {
        where : {
            poemId : poem.id
        }
    })
    
    const amountOfVersesLeft = poem.targetLength - amountOfVerse

    return {
        verse : lastVerse[0],
        queue : queue.slice(0,5),
        poem : poem,
        amountOfVersesLeft : amountOfVersesLeft
    };
});

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let sentence = data.get("sentence")
        let author = data.get("author")
        let token = data.get("token")
        let poemId = data.get("poemId")
        let creationDate = new Date()

        if (!sentence) {
            return fail(401, { sentence, missing: true });
        }

        if (typeof sentence != "string" || typeof author != "string") {
            return fail(400, { incorrect: true })
        }

        await prisma.Verse.create({
            data: {
                sentence,
                author,
                poemId : parseInt(poemId),
            },
        });
        
        const poem = await prisma.DailyPoem.findUnique( {
            where : {
                id : parseInt(poemId)
            }
        })
    
        const amountOfVerses = await prisma.Verse.count( {
            where : {
                poemId : poem.id
            }
        })
    
        if (amountOfVerses >= poem.targetLength) {
            await prisma.DailyPoem.update( {
                where : {
                    id : poem.id
                },
                data : {
                    finished : true
                }
            })
        }
        
        await prisma.Session.delete({
            where : {
                token : token
            },
            
        })
        
        throw redirect(303, `/`)

    }

};
