<script>
	let proposition = {
		title : "",
		theme : "",
		targetLength : null
	}
</script>

<div class="container">
	<div class="is-size-1 is-title">
		Ajouter une proposition
	</div>
<div>
	<div class="centered-box">
	<form action="?/addProposition" method="POST">
		
		<div class="field">
			
			<label class = "label" for = "title">
				Ajoutez un titre
			</label>
			<div class="control">
			<input bind:value={proposition.title} class="input" id="title" name="title" type="input" >
			</div>
		</div>
		
		<div class="field">
			<label class = "label" for = "theme">
				Ajoutez un thème ou une consigne
			</label>
			<div class="control">
			<input bind:value={proposition.theme} class="input" id="theme" name="theme" type="input" >
			</div>
		</div>
		
		<div class="field">
			<label class = "label" for = "targetLength">
				Combien de vers doit faire ce poème ?
			</label>
			<div class="control">
			<input bind:value={proposition.targetLength} class="input" id="targetLength" name="targetLength" type="number" >
			</div>
		</div>
		
		<!-- Submit -->
		<div>
			<button class="button is-primary" type="submit">
				Valider la proposition
			</button>
		</div>
	
	</form>
	</div>
	</div>
</div>

<style>
	
	.centered-box {
		max-width: 50%;
		margin-left : auto;
		margin-right : auto;
		background-color: lightgrey;
		border-radius: 5px;
		padding : 20px;
	}
	
</style>
