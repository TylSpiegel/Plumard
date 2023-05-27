import { PrismaClient } from '@prisma/client'
/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').Actions} */


export const load = (async ( page )  => {
    const prisma = new PrismaClient()
    
    console.log(page.params.slug)
    
    const poem = await prisma.DailyPoem.findFirst({
        where: {
            id: parseInt(page.params.slug),
        },
    })
    
    const verses = await prisma.Verse.findMany( {
        where :  {
            poemId : parseInt(page.params.slug)
        },
        orderBy : {
            id : 'asc'
        }
    })

    return {
        poem,
        verses
    };
});
