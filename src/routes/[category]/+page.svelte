<script lang="ts">
	import Masonry from '$lib/components/Masonry.svelte'
	import TailwindMasonry from '$lib/components/TailwindMasonry.svelte'
	import FancyMasonry from '$lib/components/FancyMasonry.svelte'
	import PhotoCard from '$lib/components/PhotoCard.svelte'
	export let data
</script>

<!-- <FancyMasonry photos={data.photos} /> -->
<TailwindMasonry photos={data.photos} category={data.category} />

<!-- <Masonry reset>
	{#each data.photos as p, i}
		<PhotoCard photo={p} category={data.category} index={i} />
	{/each}
</Masonry> -->
