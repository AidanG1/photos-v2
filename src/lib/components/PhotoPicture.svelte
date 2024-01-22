<script lang="ts">
	import type { PhotoPlus, PhotoWidth } from '$lib/photos'

	export let photo: PhotoPlus
	export let width: PhotoWidth = 'w720'
</script>

<picture>
	<source srcset={photo.avif[width]} type="image/avif" />
	<img src={photo.webp[width]} alt="Photo rank {photo.rank}" loading="lazy" class="max-h-screen" />
</picture>
