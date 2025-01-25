<script lang="ts">
	import Masonry from '$lib/components/Masonry.svelte'
	import TailwindMasonry from '$lib/components/TailwindMasonry.svelte'
	import FancyMasonry from '$lib/components/FancyMasonry.svelte'
	import PhotoCard from '$lib/components/PhotoCard.svelte'
	import { categoryMenuBar } from '$lib/utils'
	import { page } from '$app/stores'
	let { data } = $props();
</script>

<svelte:head>
	<title>Aidan's Photos: {categoryMenuBar(data.category)}</title>
	<meta name="description" content="Aidan's Photos: {categoryMenuBar(data.category)}" />
	<meta property="og:title" content="Aidan's Photos: {categoryMenuBar(data.category)}" />
	<meta
		property="og:description"
		content="Aidan's Photos from the {categoryMenuBar(data.category)} category"
	/>
	<meta property="og:image" content={data.photos[0].webp.w720} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Aidan's Photos" />
	<meta property="og:locale" content="en_US" />
</svelte:head>
<div class="flex justify-center p-2">
	<h1 class="text-4xl font-bold text-primary-content">{categoryMenuBar(data.category)}</h1>
</div>
<!-- <FancyMasonry photos={data.photos} /> -->
<!-- <TailwindMasonry photos={data.photos} category={data.category} /> -->

<Masonry reset>
	{#each data.photos as p, i}
		<div id="photo-{i}">
			<PhotoCard photo={p} category={data.category} index={i} />
		</div>
	{/each}
</Masonry>
