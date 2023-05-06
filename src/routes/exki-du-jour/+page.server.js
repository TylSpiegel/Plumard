import prisma from "/src/lib/prisma";
/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').Actions} */

import {fail, redirect} from "@sveltejs/kit";


export const load = (async ()  => {

    // check if session avalaible
    // waiting && active = queue
    // active = current writer


    const session = await prisma.session.create({
        data: {
            token : Math.random().toString(20),
        }
    })


    const queue = await prisma.session.findMany({
        where : {
            waiting : true,
            writing : false
        },
        orderBy : {
            createdAt : 'asc'
        }
    })

    const lastVerse = await prisma.verse.findMany({
        orderBy : {
            id : 'desc'
        },
        take : 1
    })

    return {
        session : session,
        verse : lastVerse[0],
        queue : queue.slice(0,5)
    };
});

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        let sentence = data.get("sentence")
        let author = data.get("author")
        let token = data.get('token')
        let poemId = 1
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
                poemId,
            },
        });

        await prisma.Session.delete({
            where : {
                token : token
            },
        })

        // Get token -> Inserted in form

        // Set active status as False


        throw redirect(303, `/`)

    }

};
