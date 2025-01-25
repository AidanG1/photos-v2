<script lang="ts">
	import type { PhotoPlus, PhotoStats, PhotoWidth } from '$lib/types'
	import { createEventDispatcher, onMount } from 'svelte'

	interface Props {
		photo: PhotoPlus;
		width?: PhotoWidth;
		naturalHeight?: number;
		naturalWidth?: number;
		clientWidth?: number;
		clientHeight?: number;
		height_class?: string;
		height_style?: string;
	}

	let {
		photo,
		width = 'w720',
		naturalHeight = $bindable(0),
		naturalWidth = $bindable(0),
		clientWidth = $bindable(0),
		clientHeight = $bindable(0),
		height_class = 'h-auto',
		height_style = ''
	}: Props = $props();

	let image: HTMLImageElement = $state()

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
