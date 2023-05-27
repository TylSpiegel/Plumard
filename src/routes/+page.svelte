<script>
	import Poem from '/src/components/Poem.svelte'
	/** @type {import('./$types').PageData} */
	export let data;
	
</script>

<div class="container px-4 py-6 mx-auto">
    <div class="bg-white text-center py-4 lg:px-4">
        <div class="p-2 bg-indigo-500 items-center text-indigo-100 leading-none lg:rounded-full flex" role="alert">
          <div>
	          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            Plumard
          </span>
          </div>
            </div>
	    <div class="is-subtitle">
		    Pour écrire des petits poèmes quotidiennement et collaborativement
	    </div>

    </div>
</div>

<div class = "section">
	<div class = "container">
		
		<div class="box has-background-grey">
			<p class="has-text-white is-size-4">
			Le principe du jeu est le suivant : chaque participant écrit à tour de rôle une partie d'une phrase, dans l'ordre sujet–verbe–complément, sans savoir ce que le précédent a écrit. La première phrase qui résulta de ce processus et qui donna le nom à ce jeu fut :
			« Le cadavre – exquis – boira – le vin – nouveau. »
			</p>
			<br>
			<p class="has-text-white is-size-4">
			Ici, nous fonctionnerons plutôt avec des vers. Encore qu'il ne soit pas interdit d'imaginer de le faire avec des syntagmes.
			</p>
		</div>
		
	</div>
</div>

<div class="hero is-link">
	<div class="columns is-centered is-vcentered">
		
		<div class="column is-5 p-5">
			<div class="block m-4">
				<p class="has-text-white is-size-5">
					En poésie, le tout, c'est de garder la forme. <br>
					Alors, quoi de mieux qu'un cadavre exquis par jour comme exercice.
				</p>
			</div>
		</div>
		
		<div class="column is-2">
			<div class="w-full text-center py-4">
				<button class="button">
				<a href="/exquis-du-jour">
					Exquis du jour
				</a>
				</button>
			</div>
		</div>
	</div>
</div>



<div class="hero is-link my-5">
	<div class="columns is-centered is-vcentered">
		
		<div class="column is-5 p-5">
			<div class="block m-4">
				<p class="has-text-white is-size-5">
				Allez donc découvrir la littérature des jours précédents.
				</p>
			</div>
		</div>
		
		<div class="column is-2">
			<div class="w-full text-center py-4">
				<button class="button">
					<a  href="/poemes">
						Découvrir la littérature des jours précédents
					</a>
				</button>
			</div>
		</div>
	</div>
</div>


<div>
	<h3>Poème d'hier</h3>
	
	<Poem {data} />
</div>
