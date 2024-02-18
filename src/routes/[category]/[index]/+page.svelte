<script lang="ts">
	import PhotoPicture from '$lib/components/PhotoPicture.svelte'
	import type { PhotoStats } from '$lib/types.js'

	export let data
	function pageIndex(change: number): number {
		const index = data.index + change
		return index < 0 ? data.photos.length - 1 : index % data.photos.length
	}

	let dialog: HTMLDialogElement

	let naturalHeight: number
	let naturalWidth: number
	let clientHeight: number
	let clientWidth: number
</script>

<dialog bind:this={dialog} class="backdrop:bg-surface-50-900-token">
	<div class="flex flex-col justify-center p-2 h-screen">
		<div class="h-1/2">
			{#if naturalHeight === 0} <p>Loading...</p> {/if}
			<PhotoPicture
				photo={data.photos[data.index]}
				width="w6000"
				height_class="h-1/2"
				bind:naturalHeight
				bind:naturalWidth
				bind:clientHeight
				bind:clientWidth
			/>
		</div>
		<h2>
			Full Resolution Image {naturalWidth}x{naturalHeight} displaying at {clientWidth}x{clientHeight}
		</h2>
		<button class="variant-filled btn mt-2 w-full" on:click={() => dialog.close()}> Close </button>
	</div>
</dialog>
<div class="flex flex-col p-2">
	<div class="flex max-h-screen justify-center">
		<PhotoPicture photo={data.photos[data.index]} width="w1440" />
	</div>
	<div class="my-2 flex flex-col justify-center">
		<div class="flex items-center justify-center gap-4 p-4">
			<!-- Button: Left -->
			<a href="/{data.category}/{pageIndex(-1)}/" class="grow">
				<button type="button" class="variant-filled btn-icon">
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
			<button
				type="button"
				class="variant-filled btn w-full"
				on:click={() => {
					dialog.showModal()
				}}
			>
				Load full resolution
			</button>
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
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</a>
		</div>
		<a href="/{data.category}/" class="mt-2">
			<button type="button" class="variant-filled btn w-full"> Close </button>
		</a>
	</div>
</div>
