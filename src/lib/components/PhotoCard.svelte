<script lang="ts">
	import type { PhotoPlus } from '$lib/types'
	import PhotoPicture from './PhotoPicture.svelte'

	interface Props {
		photo: PhotoPlus;
		category: string;
		index: number;
	}

	let { photo, category, index }: Props = $props();
</script>

<a href="/{category}/{index}/">
	<div class="transition-transform hover:z-10 hover:scale-105">
        <PhotoPicture photo={photo} />
	</div>
</a>
