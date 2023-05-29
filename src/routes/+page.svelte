<script>
	import Poem from '/src/components/Poem.svelte'
	/** @type {import('./$types').PageData} */
	export let data;
	
</script>

<!--   ----------------------------------------------------    -->
<!--   ----------------------------------------------------    -->


<section class="hero is-fullheight" id="container">
	<div class="hero-body has-text-centered">
		<div class="central-content has-text-centered">
			
			<h1 class="is-size-1">Exquis site</h1>
			<p class="is-size-4">En poésie, le tout, c'est de garder la forme.</p>
			<br>
			<div class="buttons is-centered">
				<button class="button is-dark is-medium">
					<a href="/exquis-du-jour">
						Exquis du jour
					</a>
				</button>
				
				<button class="button is-dark is-medium">
					<a href="/exquis-d-hier">
						Exquis d'hier
					</a>
				</button>
			</div>
		</div>
	</div>
</section>


<!--   ----------------------------------------------------    -->
<!--   ----------------------------------------------------    -->


<style>
	
	* {
		font-family: 'Nunito Sans', sans-serif;
	}
	
	:root {
		--shadowDark: #545B77;
		--background: #E4E9F2;
		--shadowLight: #545B77;
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
	}
	
	input {
		background: var(--shadowDark) !important;
	}
	
	a {
		font-weight: 600;
	}
</style>
