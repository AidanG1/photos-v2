<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'
	import { fly } from 'svelte/transition'

	export let data
	function pageIndex(change: number): number {
		const index = data.index + change
		return index < 0 ? data.photos.length - 1 : index % data.photos.length
	}
</script>

	<a href="/{data.category}/" type="button" class="variant-outline btn-icon absolute -translate-x-1 translate-y-1 right-0">X</a>
<div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
	<!-- Button: Left -->
	<a href="/{data.category}/{pageIndex(-1)}/">
		<button type="button" class="variant-filled btn-icon">
			<i class="fa-solid fa-arrow-left" />
		</button>
	</a>
	<div class="flex max-h-screen justify-center">
		<PhotoPicture photo={data.photos[data.index]} highRes={true} />
	</div>
	<!-- Button: Right -->
	<a href="/{data.category}/{pageIndex(1)}/">
		<button type="button" class="variant-filled btn-icon">
			<i class="fa-solid fa-arrow-right" />
		</button>
	</a>
</div>
