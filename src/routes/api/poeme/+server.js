import prisma from "../../../lib/prisma.js";
import {json} from "@sveltejs/kit";

export const PUT = (async ({ request }) => {
	
	const data = await request.json()
	console.log(data)
	await prisma.DailyPoem.createMany({data})
	try {
	
	}
	catch {
		return json({
			status : 401,
			message : 'Erreur lors de la création des items'
		})
	}
	
	return json({
		status : 201,
		message : 'Items créés avec succès'
	})
	
});

export const DELETE = (async ({ request }) => {
	
	const ids = await request.json()
	console.log(ids)
	await prisma.PoemProposition.deleteMany({
	where : {
		id : {
			in : ids
		}
	}
	})
	
	return json({
		status : 201,
		message : 'Items supprimés avec succès'
	})
	
});
