<script lang="ts">
	import type { PhotoPlus, PhotoStats, PhotoWidth } from '$lib/types'
	import { createEventDispatcher, onMount } from 'svelte'

	export let photo: PhotoPlus
	export let width: PhotoWidth = 'w720'
	export let naturalHeight: number = 0
	export let naturalWidth: number = 0
	export let clientWidth: number = 0
	export let clientHeight: number = 0
	export let height_class: string = 'h-auto'
	export let height_style: string = ''

	let image: HTMLImageElement

	const dispatch = createEventDispatcher()

	onMount(() => {
		if (image.complete) {
			dispatch('loaded', { image })
		} else {
			image.onload = () => {
				dispatch('loaded', { image })
			}
		}
	})
</script>

<picture bind:clientWidth bind:clientHeight>
	<!-- <source srcset={photo.jp2[width]} type="image/jp2" /> -->
	<source srcset={photo.avif[width]} type="image/avif" />
	<img
		bind:this={image}
		src={photo.webp[width]}
		alt="Photo rank {photo.rank}"
		loading="lazy"
		class={height_class}
		bind:naturalHeight
		bind:naturalWidth
		style={height_style}
		crossorigin="anonymous"
	/>
</picture>
