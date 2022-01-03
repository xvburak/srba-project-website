<script>
	export let segment;
</script>

<nav class="mb-16">
	<div class="flex p-2 text-3xl ">
		<div><a class='{segment === undefined ? "selected" : ""}' href='.'>Srba Projekt</a>,&nbsp;</div>
		<!-- <div class="flex"> -->
		<div><a class='{segment === "about" ? "selected" : ""}' href='about'>Informace</a>,&nbsp;</div>
		<div><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Projekty</a></div>
		<!-- </div> -->
	</div>
</nav>