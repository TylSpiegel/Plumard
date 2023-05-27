import { PrismaClient } from '@prisma/client'
/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').Actions} */


export const load = (async ()  => {
    const prisma = new PrismaClient()

    return {
        poems : await prisma.dailyPoem.findMany( {
            where : {
                finished: true
            }
        })
    };
});
