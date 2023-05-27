import { PrismaClient } from '@prisma/client'
/** @type {import('./$types').PageLoad} */


export const load = async ()  => {
	const prisma = new PrismaClient()
	const poems = await prisma.dailyPoem.findMany( {
		select : {
			title : true,
			publish_date : true
		}
	})
	
	const events = poems.map((d) => { return {
		title : d.title,
		start : d.publish_date,
		end : d.publish_date,
		allDay : true
	}
	})
	
	const propositions = await prisma.PoemProposition.findMany()
	return {
		events,
		propositions
	};
};
