<script>
	let proposition = {
		title : "",
		theme : "",
		targetLength : null
	}
</script>


<section class="hero is-fullheight" id="container">
	<div class="hero-body has-text-centered">
		
		
		<a href = "/" id="home">
			<button class="button is-dark">
				<span class="is-size-4">&#8678; &emsp;</span>   Retour
			</button>
		</a>
		
<div class="container">
	<div class="is-size-1 is-title mb-3">
		Ajouter une proposition
	</div>
	
	<p class="subtitle">
		Vous pouvez proposer une formule pour un prochain cadavre exquis.
		<br>
		N'hésitez pas à être créatif.
	</p>
	
<div>
	<div class="centered-box central-content">
	<form action="?/addProposition" method="POST">
		
		<div class="field">
			
			<label class = "label" for = "title">
				Un titre
			</label>
			<div class="control">
			<input bind:value={proposition.title} class="input" id="title" name="title" type="input" >
			</div>
		</div>
		
		<div class="field">
			<label class = "label" for = "theme">
				Un thème ou une consigne
			</label>
			<div class="control">
			<input bind:value={proposition.theme} class="input" id="theme" name="theme" type="input" >
			</div>
		</div>
		
		<div class="field">
			<label class = "label" for = "targetLength">
				Un nombre de vers maximum (par défaut : 20)
			</label>
			<div class="control">
			<input bind:value={proposition.targetLength} class="input" id="targetLength" name="targetLength" type="number" >
			</div>
		</div>
		
		<!-- Submit -->
		<div>
			<button class="button is-dark" type="submit">
				Valider la proposition
			</button>
		</div>
	
	</form>
	</div>
	</div>
</div>
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
		color :white;
	}
	
	a {
		font-weight: 600;
	}
	.centered-box {
		max-width: 50%;
		margin-left : auto;
		margin-right : auto;
		border-radius: 5px;
		padding : 20px;
	}
	
	#home {
		position : absolute;
		top : 1.2em;
		left : 1.2em;
	}
</style>
