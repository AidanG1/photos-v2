<script>
	import '../app.pcss'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import { categoryMenuBar } from '$lib/utils'

	export let data
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				Aidan's Photos
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				{#each data.categories as c}
					<li><a href="/{c}/">{categoryMenuBar(c)}</a></li>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
