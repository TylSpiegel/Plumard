<script>
	import Poem from '/src/components/Poem.svelte'
	/** @type {import('./$types').PageData} */
    export let data;
	
</script>

	<Poem {data}/>
	
	<button class="button">
		<a href = "/poemes">
		Retour à la liste des poèmes
		</a>
	</button>
