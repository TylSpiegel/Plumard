<script lang="ts">
    /** @type {import('./$types').PageData} */
    import PoemCard from "/src/components/PoemCard.svelte";

    export let data;

</script>

<main>

    {#each data.poems as poem}
        <PoemCard {poem}/>
    {/each}

</main>
