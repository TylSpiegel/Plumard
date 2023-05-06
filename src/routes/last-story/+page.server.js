import prisma from "/src/lib/prisma";
/** @type {import('./$types').PageLoad} */
import {fail, redirect} from "@sveltejs/kit";


export const load = (async ()  => {


    const verses = await prisma.Verse.findMany( {
        where : {
            poemId : 1
        },
        orderBy : {
            id : 'asc'
        }
    })

    return {
        verses
    };
});
