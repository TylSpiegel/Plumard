<script>
    export let poem;
</script>

<div class="tile is-parent">
	<a href="/poemes/{poem.id}">
		<div class="tile is-child notification is-primary is-8 m-6">
		    <h3>{poem.title}</h3>
		    <p class="subtitle">{poem.theme}</p>
		    <button class="button">
		        Lire
		    </button>
		</div>
	</a>
</div>

<style>


</style>
