import {fail, redirect} from "@sveltejs/kit";
import prisma from "../../lib/prisma.js";

export const actions = {
	addProposition: async ({ request }) => {
		const data = await request.formData();
		let title = data.get("title")
		let theme = data.get("theme")
		let targetLength = parseInt(data.get("targetLength"))
		
		if (!title) {
			return fail(401, );
		}
		
		if (!targetLength) { targetLength = 20 }
		if (!theme) { theme = "Thème libre" }
		
		await prisma.PoemProposition.create({
			data: {
				title, theme, targetLength
			},
		});
		
		throw redirect(303, `/programmation/proposition`)
		
	}
	
};
