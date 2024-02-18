<script lang="ts">
	import type { PhotoPlus } from '$lib/types'
	import { afterUpdate, beforeUpdate, onMount } from 'svelte'
	import PhotoPicture from './PhotoPicture.svelte'
	import PhotoCard from './PhotoCard.svelte'

	export let photos: PhotoPlus[]
	export let category: string

	let masonry: HTMLElement

	let ordered_photos = photos

	const layout = () => {
		const masonryComputedStyle = window.getComputedStyle(masonry)
		console.log('masonryComputedStyle', masonryComputedStyle)
		const masonryColumnCount = parseInt(masonryComputedStyle.getPropertyValue('columns'))

		console.log('masonryColumnCount', masonryColumnCount)

		// reorganize the photos
		// in the case of 4 columns, we want to have the first photo in the first column, the second in the second column, the third in the third column, and the fourth in the fourth column
		// then the fifth photo in the first column, the sixth in the second column, and so on
		ordered_photos = photos.map((p, i) => {
			const column = i % masonryColumnCount
			const row = Math.floor(i / masonryColumnCount)
			const new_index = row + column * Math.ceil(photos.length / masonryColumnCount)
			console.log('new_index', new_index)
			console.log('i', i)
			return { ...p, new_index }
		}).sort((a, b) => a.new_index - b.new_index)
	}

	onMount(() => {
		layout()
		window.addEventListener('resize', layout)
	})
</script>

<section class="columns-1 gap-2 space-y-2 p-2 sm:columns-2 md:columns-3 xl:columns-4" bind:this={masonry}>
	{#each ordered_photos as p, i}
		<div>
			<PhotoCard photo={p} category={category} index={i} />
		</div>
	{/each}
</section>
