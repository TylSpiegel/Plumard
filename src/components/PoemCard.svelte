<script>

    import { Card } from "flowbite-svelte";
    export let poem;
</script>

<Card href="/cards">
    <h3>{poem.title}</h3>
    <p class="subtitle">{poem.theme}</p>
    <button class="button">
        Lire
    </button>
</Card>

<style>


</style>
