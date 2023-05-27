<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>

<main class="container">
	
	<div class="has-text-centered mb-6" id = "title">
		<p class="is-title is-size-1 has-text-info">
			{data.poem.title}
		</p>
		<p class="is-subtitle is-size-4">
			{data.poem.theme}
		</p>
	</div>
	
	<div class="box has-text-centered" id="poeme">
	{#each data.verses as verse}
	
		<div>
			<p class="is-size-3 pb-3">
				{verse.sentence}
			</p>
		</div>
	
	{/each}
	</div>

	
	<button class="button">
		<a href = "/poemes">
		Retour à la liste des poèmes
		</a>
	</button>
</main>
