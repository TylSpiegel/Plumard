

<script>

    /** @type {import('./$types').PageData} */

    import {onMount} from "svelte";
    import {fail, redirect, json} from "@sveltejs/kit";
    import { goto } from '$app/navigation'
    import { userWriting } from '/src/lib/stores/store.js'

    export let data;
    export let form;

    let interval = 5000;
    let queue ;

    onMount(async () => {
        if (!$userWriting) {

            const checkOnSession = setInterval(async () => {

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

                console.log(result)
                if (result.writing) {
                    data.session.writing = true
                    $userWriting = result.writing
                    $userWriting = $userWriting
                    //set interval for writing
                }

            }, interval)
        }
        })


</script>

{#if $userWriting}
<main class="container">

<section class="section">
    <h1 class="is-size-2">
        La plume contributive
    </h1>
    <!-- PREVIOUS -->

    <div class="box">
    {#if data.verse}
        <p>Dernier vers</p>
        <p class="bold is-size-4">{data.verse.sentence}</p>
    {:else}
        <p>Vous avez l'honneur d'inaugurer le poème.</p>
    {/if}
    </div>

    <form action="?/create" method="POST">
        <div class="block">
        <input type="text" name="token" bind:value={data.session.token} hidden>
        </div>

        <div class="block">
        <label for="newEntry" class="label">
            Votre coup de plume
            <input id="newEntry" type="textare" name="sentence" class="textarea">
        </label>
        </div>

        <!-- Yours -->
        <div class="block">
        <label for="author" class="label">
            Votre nom d'auteur
            <input id="author" type="input" name="author" class="input">

        </label>
        </div>
        <!-- Submit -->
        <div>
        <button type="submit" class="button is-primary">
            Valider le coup de plume
        </button>
        </div>

    </form>

    {#if form?.success}
        <div>SUCCESS</div>
    {/if}
</section>
 </main>

    {:else}

<div>
    <h1>File d'attente</h1>

    {#if queue}
    <p>Il y a {queue} personnes dans la file</p>
    {:else}
    <p>On se renseigne pour savoir si le siège d'écriture est disponible.</p>
    {/if}

</div>

{/if}
