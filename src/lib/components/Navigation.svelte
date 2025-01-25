<script lang="ts">
	import { categoryMenuBar } from '$lib/utils'
	interface Props {
		categories: string[];
	}

	let { categories }: Props = $props();
</script>

{#each categories as c}
	<li class="font-semibold"><a href="/{c}/">{categoryMenuBar(c)}</a></li>
{/each}
