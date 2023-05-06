<script lang="ts">

    import type { PageData } from './$types';
    export let data : PageData;

</script>

<main>

    {#each data.verses as verse}
        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{verse.sentence}</p>
        </blockquote>

    {/each}

    <h2> Les auteurs : </h2>


    <div>
    {#each data.verses as verse}
        <span>{verse.author}</span>
    {/each}
    </div>

</main>

<style>

</style>
