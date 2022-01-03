<script>
  import Nav from '../components/Nav.svelte';

  export let segment;

</script>



{#if segment === undefined}
	<div class="bg-orange-400 h-screen text-white">
		<Nav {segment}/>
		<main >
			<slot></slot>
		</main>
	</div>
{:else}
		<Nav {segment}/>
		<main >
			<slot></slot>
		</main>
{/if}
