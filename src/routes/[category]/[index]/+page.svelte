<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'
	import type { PhotoWidth } from '$lib/photos.js'
	import { fly } from 'svelte/transition'

	export let data
	function pageIndex(change: number): number {
		const index = data.index + change
		return index < 0 ? data.photos.length - 1 : index % data.photos.length
	}

	let width: PhotoWidth = 'w1440'
</script>

<!-- <a
	href="/{data.category}/"
	type="button"
	class="variant-outline btn-icon absolute right-0 -translate-x-1 translate-y-1">X</a
> -->
<div class="p-2 flex flex-col">
	<div class="flex items-center justify-center gap-4 p-4">
		<!-- Button: Left -->
		<a href="/{data.category}/{pageIndex(-1)}/" class="grow">
			<button type="button" class="variant-filled bg-surface-50-900-token btn-icon">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15 7L10 12L15 17"
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</a>
		<!-- Button: Right -->
		<a href="/{data.category}/{pageIndex(1)}/">
			<button type="button" class="variant-filled bg-surface-50-900-token btn-icon">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-surface-50"
				>
					<path
						d="M10 7L15 12L10 17"
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</a>
	</div>
	<div class="flex max-h-screen justify-center">
		<PhotoPicture photo={data.photos[data.index]} {width} />
	</div>
	<div class="flex flex-col justify-center mt-2">
		<button type="button" class="variant-filled btn w-full" on:click={() => {width='w6000'}}> Load full resolution </button>
		<a href="/{data.category}/">
			<button type="button" class="variant-filled btn w-full"> Close </button>
		</a>
	</div>
</div>
