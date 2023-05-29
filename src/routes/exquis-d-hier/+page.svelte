<script>
    /** @type {import('./$types').PageData} */
    import PoemCard from "/src/components/PoemCard.svelte";
    export let data;

</script>


<section class="hero is-fullheight" id="container">
	
	<a href = "/" id="home">
		<button class="button is-dark">
			<span class="is-size-4">&#8678; &emsp;</span>   Retour
		</button>
	</a>
	
	<div class="hero-body has-text-centered">
	<div class="grid-container">
		{#each data.poems as poem}
			<div class="grid-item">
	            <PoemCard {poem}/>
			</div>
	    {/each}
	</div>
	</div>
</section>


<style>
	.grid-container {
		columns : 2 auto
	}
	
	
	* {
		font-family: 'Nunito Sans', sans-serif;
	}
	
	:root {
		--shadowDark: #545B77;
		--background: #E4E9F2;
		--shadowLight: #545B77;
		--lightGrey : #C9CCD5;
	}
	
	#container {
		background: var(--background);
	}
	
	.hero-body {
		justify-content: center;
	}
	
	.central-content {
		border-radius: 25px;
		padding: 1.5rem;
		box-shadow: 8px 8px 20px var(--shadowDark), -8px -8px 20px var(--shadowLight);
		min-width: 50%;
	}
	
	input {
		background: var(--lightGrey) !important;
		border-radius: 15px;
		color : var(--shadowDark);
		font-size : 1.5em;
	}
	
	a {
		font-weight: 600;
	}
	
	#home {
		position : absolute;
		top : 1.2em;
		left : 1.2em;
	}
</style>
