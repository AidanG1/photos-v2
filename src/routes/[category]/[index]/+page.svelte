<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'
	import { photos } from '$lib/photos'
	import type { PhotoStats } from '$lib/types.js'

	export let data
	function pageIndex(change: number): number {
		const index = data.index + change
		return index < 0 ? data.photos.length - 1 : index % data.photos.length
	}
</script>

<div class="flex flex-col justify-center p-2">
	<div class="flex justify-center p-2">
		<PhotoPicture photo={data.photos[data.index]} width="w1440" height_style="height: 75vh" height_class="shadow-2xl" />
	</div>
	<div class="flex items-center justify-center gap-4">
		<!-- Button: Left -->
		<a href="/{data.category}/{pageIndex(-1)}/">
			<button type="button" class="btn btn-circle">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15 7L10 12L15 17"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</a>
		<a
			type="button"
			class="variant-filled btn grow"
			href={data.photos[data.index].webp.w_1}
			target="_blank"
		>
			View full resolution
		</a>
		<!-- Button: Right -->
		<a href="/{data.category}/{pageIndex(1)}/">
			<button type="button" class="btn btn-circle">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-surface-50"
				>
					<path
						d="M10 7L15 12L10 17"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</a>
	</div>
	<a type="button" href="/{data.category}/" class="variant-filled btn my-2 w-full"> Close </a>
</div>
