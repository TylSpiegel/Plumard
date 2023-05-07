import prisma from "/src/lib/prisma";
/** @type {import('./$types').PageLoad} */


export const load = (async ()  => {

    const poem = await prisma.DailyPoem.findFirst( {
        where : {
            finished : true
        },
        orderBy : {
            id : 'desc'
        }
    })

    if (!poem) {
        return {
            verses : [],
        }
    }

    const verses = await prisma.Verse.findMany( {
        where : {
            poemId : poem.id
        },
        orderBy : {
            id : 'asc'
        }
    })

    return {
        verses,
        poem
    };
});
