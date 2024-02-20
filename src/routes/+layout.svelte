<script lang="ts">
	import '../app.css'
	import { fly } from 'svelte/transition'
	import Navigation from '$lib/components/Navigation.svelte'
	import Theme from '$lib/components/Theme.svelte'

	export let data
</script>

<div class="navbar lg:hidden">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<Navigation categories={data.categories} />
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost text-xl" href="/favorites/">Aidan's Photos</a>
	</div>
	<div class="navbar-end">
		<Theme />
	</div>
</div>
<aside class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<main class="w-full">
			{#key data.pathname}
				<div in:fly={{ duration: 300, delay: 400 }} out:fly={{ duration: 300 }}>
					<slot />
				</div>
			{/key}
		</main>
		<!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-60 bg-base-200 p-4 text-base-content">
			<a class="btn btn-ghost text-xl" href="/favorites/">Aidan's Photos</a>
			<Theme />
			<Navigation categories={data.categories} />
		</ul>
	</div>
</aside>

<style>
	.navbar {
		background-color: rgba(var(--color-surface-500) / 1);
		background-image: radial-gradient(at 1% 78%, oklch(var(--b1)) 0px, transparent 50%),
			radial-gradient(at 70% 16%, oklch(var(--b2)) 0px, transparent 50%),
			radial-gradient(at 27% 88%, oklch(var(--b3)) 0px, transparent 50%),
			radial-gradient(at 15% 86%, oklch(var(--b2)) 0px, transparent 50%),
			radial-gradient(at 57% 99%, oklch(var(--b1)) 0px, transparent 50%);
		color: oklch(var(--p));
	}
</style>
