<script lang="ts">
	import Masonry from '$lib/components/Masonry.svelte'
	import TailwindMasonry from '$lib/components/TailwindMasonry.svelte'
	import PhotoCard from '$lib/components/PhotoCard.svelte'
	export let data
</script>

<!-- <TailwindMasonry photos={data.photos} /> -->

<Masonry reset>
	{#each data.photos as p, i}
		<PhotoCard photo={p} category={data.category} index={i} />
	{/each}
</Masonry>
