import prisma from "/src/lib/prisma";
import type { PageServerLoad } from '/src/lib/types';
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
}) satisfies PageServerLoad;
