import { PrismaClient } from '@prisma/client'
import type {Entry} from "/src/lib/types/Entry.ts"

export const addEntry = async (entry)  => {
    const prisma = new PrismaClient()

    //  Create verse
    //  Changed status session inactive
    //  return request status

    entry.poemId = 1


    const verse = await prisma.verse.create({
        data: entry
    })

    return verse

};
