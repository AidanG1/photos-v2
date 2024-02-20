<script lang="ts">
	import Masonry from '$lib/components/Masonry.svelte'
	import TailwindMasonry from '$lib/components/TailwindMasonry.svelte'
	import FancyMasonry from '$lib/components/FancyMasonry.svelte'
	import PhotoCard from '$lib/components/PhotoCard.svelte'
	import { categoryMenuBar } from '$lib/utils'
	export let data
</script>

<div class="flex justify-center p-2">
<h1 class="text-3xl">{categoryMenuBar(data.category)}</h1>
</div>
<!-- <FancyMasonry photos={data.photos} /> -->
<TailwindMasonry photos={data.photos} category={data.category} />

<!-- <Masonry reset>
	{#each data.photos as p, i}
		<PhotoCard photo={p} category={data.category} index={i} />
	{/each}
</Masonry> -->
