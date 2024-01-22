<script lang="ts">
	import '../app.pcss'
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch,
	} from '@skeletonlabs/skeleton'
	import { fly } from 'svelte/transition'
	import Navigation from '$lib/components/Navigation.svelte'

	export let data

	initializeStores()

	const drawerStore = getDrawerStore()

	function drawerOpen(): void {
		drawerStore.open({})
	}
</script>

<Drawer><Navigation categories={data.categories} /></Drawer>
<AppShell slotSidebarLeft="bg-surface-50-900-token w-0 lg:w-56 lg:p-4" slotPageContent="bg-surface-300">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">Aidan's Photos</strong>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation categories={data.categories} />
	</svelte:fragment>
	{#key data.pathname}
		<div in:fly={{ duration: 300, delay: 400 }} out:fly={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</AppShell>
