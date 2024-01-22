<script lang="ts">
	import type { PhotoPlus } from '$lib/photos'

	export let photo: PhotoPlus
	export let highRes = false
</script>

<picture>
	{#if highRes}
		<!-- <source srcset={photo.jp2.w1440} type="image/jp2" /> -->
		<source srcset={photo.avif.w1440} type="image/avif" />
		<img src={photo.webp.w1440} alt="Photo rank {photo.rank}" loading="lazy" class="max-h-screen" />
	{:else}
		<!-- <source srcset={p.jp2.w720} type="image/jp2" /> -->
		<source srcset={photo.avif.w720} type="image/avif" />
		<img src={photo.webp.w720} alt="Photo rank {photo.rank}" loading="lazy" />
	{/if}
</picture>
