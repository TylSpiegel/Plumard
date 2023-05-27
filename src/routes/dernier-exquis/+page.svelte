<script>

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<main>


    {#if data.poem}
    <div class="container has-background-light">
	    <div class="box">
	    {#each data.verses as verse}
	        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
	            <p>{verse.sentence}</p>
	        </blockquote>
	    {/each}
	
	    </div>
    </div>

    <h2> Les auteurs : </h2>


    <div>
	    <div class="notification is-light">
	        {data.verses.map(d => d.author).join(', ')}
	
	    </div>
    </div>

    {:else}

        <h2 class="is-size-2">Il n'y a pas eu de poème hier.</h2>
    {/if}

</main>

<style>

</style>
