<script>
	import Poem from '/src/components/Poem.svelte'
	/** @type {import('./$types').PageData} */
    export let data;
	
</script>




<section class="hero is-fullheight" id="container">
	
	<a href = "/" id="home">
		<button class="button is-dark">
			<span class="is-size-4">&#8678; &emsp;</span>   Retour
		</button>
	</a>
	
	<div class="hero-body has-text-centered">
		
		<Poem {data}/>
		
	
	</div>
</section>


<style>
	
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
		bottom : 1.2em;
		left : 1.2em;
	}


</style>
