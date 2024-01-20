<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'

	export let data

	let elemCarousel: HTMLDivElement
	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth // step left
		elemCarousel.scroll(x, 0)
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth // step right
		elemCarousel.scroll(x, 0)
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0)
	}
</script>

<div class="card grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
	<!-- Button: Left -->
	<button type="button" class="variant-filled btn-icon" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
		{#each data.photos as p}
			<img
				src={p.avif.w1440}
				alt="Photo rank {p.rank}"
				loading="lazy"
				class="max-h-screen snap-center rounded-container-token"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="variant-filled btn-icon" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>

<div class="card grid grid-cols-6 gap-2 p-4">
	{#each data.photos as p, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<PhotoPicture photo={p} />
		</button>
	{/each}
</div>
