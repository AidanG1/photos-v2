<script lang="ts">
	import Masonry from 'svelte-masonry'
	import { onMount } from 'svelte'
	import type { PhotoPlus } from '$lib/types'
	import { makeAltText } from '$lib/utils'

	let {
		images,
		category
	}: {
		images: PhotoPlus[]
		category: string
	} = $props()

	let refreshLayout
</script>

<Masonry items={images} bind:refreshLayout gridGap={'0.75rem'}>
	{#each images as image, i}
		<a href="/{category}/{i}/" class="transition-transform hover:z-10 hover:scale-105">
			<picture>
				<source srcset={image.avif.w720} type="image/avif" />
				<img
					src={image.webp.w720}
					alt={makeAltText(image.categories)}
					onload={refreshLayout}
					class="h-auto w-full transition-transform hover:rounded-lg"
				/>
			</picture>
		</a>
	{/each}
</Masonry>
