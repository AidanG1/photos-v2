<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'
	import { photos } from '$lib/photos'
	import type { PhotoStats } from '$lib/types.js'
	import ColorThief from 'colorthief'
	import { page } from '$app/stores'

	let { data } = $props();
	function pageIndex(change: number): number {
		const index = data.index + change
		return index < 0 ? data.photos.length - 1 : index % data.photos.length
	}

	let photoDiv: HTMLDivElement = $state()

	let buttons: HTMLAnchorElement[] | null[] = $state([null, null, null, null])
</script>

<svelte:head>
	<title>Aidan's Photos: {data.category} #{data.index}</title> 
	<meta name="description" content="Aidan's Photos: {data.category} #{data.index}" />
	<meta property="og:title" content="Aidan's Photos: {data.category} #{data.index}" />
	<meta property="og:description" content="Aidan's Photos from the {data.category} category" />
	<meta property="og:image" content="{data.photos[data.index].webp.w720}" />
	<meta property="og:url" content="{$page.url.href}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Aidan's Photos" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<div class="flex min-h-screen flex-col justify-center p-2" bind:this={photoDiv}>
	<div class="flex justify-center p-2">
		<PhotoPicture
			photo={data.photos[data.index]}
			width="w1440"
			height_style="max-height: 75vh"
			height_class="shadow-2xl"
			on:loaded={(load) => {
				const colorThief = new ColorThief()
				const color = colorThief.getPalette(load.detail.image, 4)
				console.log(color)
				photoDiv.style.backgroundColor = `rgb(${color[0]})`
				// radial gradient
				photoDiv.style.backgroundImage = `radial-gradient(at 1% 78%, rgb(${color[1]}) 0px, transparent 50%), radial-gradient(at 57% 99%, rgb(${color[2]}) 0px, transparent 50%)`
				// buttons
				buttons.forEach((button) => {
					if (button) {
						button.style.backgroundColor = `rgb(${color[0]})`
						button.style.color = `rgb(${color[3]})`
					}
				})
			}}
		/>
	</div>
	<div class="flex items-center justify-center gap-4">
		<!-- Button: Left -->
		<a type="button" class="btn btn-circle" href="/{data.category}/{pageIndex(-1)}/" bind:this={buttons[0]}>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15 7L10 12L15 17"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
		<a
			type="button"
			class="variant-filled btn grow text-lg"
			href={data.photos[data.index].src}
			target="_blank"
			bind:this={buttons[1]}
		>
			View full resolution
		</a>
		<!-- Button: Right -->
		<a
			type="button"
			class="btn btn-circle"
			bind:this={buttons[2]}
			href="/{data.category}/{pageIndex(1)}/"
		>
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
		</a>
	</div>
	<a
		type="button"
		href="/{data.category}/#photo-{data.index}"
		class="variant-filled btn my-2 w-full text-lg"
		bind:this={buttons[3]}
	>
		Close
	</a>
</div>

<style>
	.btn:hover { 
        animation: shake 0.4s; 
    } 
  
    @keyframes shake { 
        0% { 
            transform: translateX(0px) rotate(0deg); 
        } 
  
        20% { 
            transform: translateX(-2px) rotate(-2deg); 
        } 
  
        40% { 
            transform: translateX(-1px) rotate(-1deg); 
        } 
  
        60% { 
            transform: translateX(2px) rotate(2deg); 
        } 
  
        80% { 
            transform: translateX(1px) rotate(1deg); 
        } 
  
        100% { 
            transform: translateX(0px) rotate(0deg); 
        } 
    } 
</style>