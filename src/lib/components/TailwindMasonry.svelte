<script lang="ts">
	import type { PhotoPlus } from '$lib/types'
	import PhotoPicture from './PhotoPicture.svelte'

	export let photos: PhotoPlus[]
</script>

<section class="columns-1 gap-1 md:columns-2 lg:columns-3 break-after-column space-y-3 p-2">
<!-- <section class="grid grid-cols-3 gap-4"> -->
	{#each photos as p}
		<div>
			<PhotoPicture photo={p} />
		</div>
	{/each}
</section>
