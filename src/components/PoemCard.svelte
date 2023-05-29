<script>
    export let poem;
</script>


<div class="card m-5">
	<a href="/exquis-d-hier/{poem.id}">
		<div class="p-5">
			<div class="block">
		    <h3 class="is-size-3">{poem.title}</h3>
		    <p class="subtitle">{poem.theme}</p>
			</div>
		    <button class="button is-light">
		        Lire
		    </button>
		</div>
	</a>
</div>

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




</style>
