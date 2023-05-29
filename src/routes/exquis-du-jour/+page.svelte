

<script>

    /** @type {import('./$types').PageData} */

    import {onMount, onDestroy} from "svelte";
	import {fade} from 'svelte/transition'
    import {slide} from 'svelte/transition'
    import { userWriting } from '/src/lib/stores/store.js'
    import {redirect} from "@sveltejs/kit";

    export let data;
    export let form;
	
	let sentence, author;
	let interval;

    let intervalDuration = 5000;
    let queue ;

    onMount(async () => {
        if (!$userWriting && data.poem) {
			
            interval  = setInterval(async () => {
				
				if (!data.session.token) {
					throw redirect(303, `/exquis-du-jour`)
				}
				
                const response = await fetch('/api/queue', {
                    method: 'POST',
                    body: JSON.stringify(data.session),
                    headers: {
                        'content-type': 'application/json'
                    }
                })

                const result = await response.json()
                queue = result.queue
                queue = queue

                if (result.writing) {
                    data.session.writing = true
                    $userWriting = result.writing
                    $userWriting = $userWriting
                }

            }, intervalDuration)
        }
        })

    onDestroy(async () => {
	    clearInterval(interval)
		$userWriting = false
    })


</script>



<section class="hero is-fullheight" id="container">
	
	<a href = "/" id="home">
		<button class="button is-dark">
			<span class="is-size-4">&#8678; &emsp;</span>   Retour
		</button>
	</a>
	
	<div class="quote has-text-centered">
	
	{#if $userWriting && data.poem}
	<div id="header" in:fade>
		<p class="info">Poème du jour : </p>
		<p class="title">{data.poem.title}</p>
		<p class="info">Thème : </p>
		<p class="title">
			{data.poem.theme}
		</p>
	</div>
		
		{#if data.verse}
				<p class="info">Vers précédent</p>
				<p class="title">{data.verse.sentence}</p>
			
		{/if}
		
		{#if !data.verse}
			<p class="info">Vous avez l'honneur d'inaugurer le poème.</p>
		{/if}
		
		{#if data.amountOfVersesLeft < 3}
			<p class="info">Il reste {data.amountOfVersesLeft} vers à rajouter à ce poème. C'est le moment de conclure.</p>
		{/if}
		
	{/if}
	</div>
	

	<div class="hero-body has-text-centered">
		
		<div class="central-content has-text-centered" transition:slide>
			
			{#if $userWriting && data.poem}
				
				<form action="?/create" method="POST" in:fade>

					<input type="text" name="token" id="token" bind:value={data.session.token} hidden>
					<input type="number" name="poemId" id="poemId" bind:value={data.poem.id} hidden>
				
					<div class="block">
						<label for="sentence" class="label info">
			
							<textarea id="sentence" type="text" name="sentence" class="textarea" bind:value={sentence}
							placeholder="Votre continuation"/>
						</label>
					</div>
					
					<!-- Yours -->
					<div class="block">
						<label for="author" class="label info">
			
							<input id="author" type="input" name="author" class="input" bind:value={author}
							placeholder="Votre nom d'auteur">
						</label>
					</div>
					<!-- Submit -->
					<div>
						{#if sentence && author}
						<button type="submit" class="button is-dark is-large">
							Valider le coup de plume
						</button>
						{/if}
					</div>
				
				</form>
			
			{:else}
			
			<p class="is-size-5">Quelqu'un est en train d'écrire. La place devrait se libérer bientôt.</p>
			
			{/if}

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
		--lightGrey : #C9CCD5;
		--focus : #FFFFFF;
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
	
	input,textarea {
		background: var(--background);
		border-radius: 15px;
		color : var(--shadowLight);
		font-size : 1.5em;
		resize:none;
	}
	
	input:focus, textarea:focus {
		background: #F4F5FA ;
	}
	
	input::placeholder, textarea::placeholder {
		font-size : .7em;
	}
	
	a {
		font-weight: 600;
	}
	
	#home {
		position : absolute;
		bottom : 1.2em;
		left : 1.2em;
	}
	
	.info {
		margin-top : 15px;
		font-size : 1.2em
	}
	
	.title {
		font-size : 1.7em;
	}
</style>
