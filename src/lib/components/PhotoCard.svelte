<script lang="ts">
	import type { PhotoPlus } from '$lib/photos'
	import PhotoPicture from './PhotoPicture.svelte'

	export let photo: PhotoPlus
    export let category: string
    export let index: number
</script>

<a href="/{category}/{index}/">
	<div class="border-2 border-black transition-transform hover:z-10 hover:scale-110">
        <PhotoPicture photo={photo} />
	</div>
</a>
