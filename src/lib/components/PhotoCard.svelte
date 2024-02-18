<script lang="ts">
	import type { PhotoPlus } from '$lib/types'
	import PhotoPicture from './PhotoPicture.svelte'

	export let photo: PhotoPlus
    export let category: string
    export let index: number
</script>

<a href="/{category}/{index}/">
	<div class="transition-transform hover:z-10 hover:scale-105">
        <PhotoPicture photo={photo} />
	</div>
</a>
