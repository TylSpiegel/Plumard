<script>
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
		
		<p class="is-subtitle is-size-6">
			écrit le {data.poem.publish_date.toLocaleString().split(',')[0]}
		</p>
	</div>
	
	{#if data.verses.length > 0}
	<div class="box has-text-centered" id="poeme">
		{#each data.verses as verse}
			<div>
				<p class="is-size-4 pb-3">
					{verse.sentence}
				</p>
			</div>
		{/each}
	</div>
	
	<div>
		<div class="notification is-dark mt-6">
			<h2 class="is-size-5 is-left"> Ce cadavre exquis est le fruit des imaginaires de : </h2>
			<p class="bold">{data.verses.map(d => d.author).join(', ')}
			</p>
		</div>
	</div>
	{:else}
		<p class="is-subtitle is-size-4">
			Ce poème est vide.
		</p>
	
	{/if}

</main>


<style>
	.bold {
		font-weight: bold;
		font-size: 1.3em;
	}
</style>
