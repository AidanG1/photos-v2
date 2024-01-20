<script lang="ts">
	import Masonry from '$lib/components/Masonry.svelte'
	export let data
</script>

<Masonry reset>
	{#each data.photos as p}
		<div>
			<picture>
				<source srcset={p.jp2.w720} type="image/jp2" />
				<source srcset={p.avif.w720} type="image/avif" />
				<img src={p.webp.w720} alt="Photo rank {p.rank}" />
			</picture>
		</div>
	{/each}
</Masonry>
