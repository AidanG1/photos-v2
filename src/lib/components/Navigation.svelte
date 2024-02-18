<script lang="ts">
	import { categoryMenuBar } from '$lib/utils'
	export let categories: string[]
</script>

{#each categories as c}
	<li><a href="/{c}/">{categoryMenuBar(c)}</a></li>
{/each}
