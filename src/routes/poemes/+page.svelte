<script>
    /** @type {import('./$types').PageData} */
    import PoemCard from "/src/components/PoemCard.svelte";
    export let data;

</script>

<main>
	<div class="tile is-ancestor" >
	    {#each data.poems as poem}
	        <PoemCard {poem}/>
	    {/each}
	</div>
</main>
