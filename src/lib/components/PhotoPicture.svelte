<script lang="ts">
	import type { PhotoPlus, PhotoStats, PhotoWidth } from '$lib/types'

	export let photo: PhotoPlus
	export let width: PhotoWidth = 'w720'
	export let naturalHeight: number = 0
	export let naturalWidth: number = 0
	export let clientWidth: number = 0
	export let clientHeight: number = 0
	export let height_class: string = 'h-auto'
</script>

<picture bind:clientWidth bind:clientHeight>
	<source srcset={photo.avif[width]} type="image/avif" />
	<img
		src={photo.webp[width]}
		alt="Photo rank {photo.rank}"
		loading="lazy"
		class={height_class}
		bind:naturalHeight
		bind:naturalWidth
	/>
</picture>
