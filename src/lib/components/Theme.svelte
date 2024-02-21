<script lang="ts">
    import { themes } from '$lib/utils'
	import { onMount } from 'svelte'

    let ls_theme: string | null = null

    onMount(() => {
        ls_theme = localStorage.getItem('theme')
    })
</script>
<div class="dropdown mr-2">
    <div tabindex="0" role="button" class="btn m-1 w-full border-2 border-primary">
        {ls_theme || 'Theme'}
        <svg
            width="12px"
            height="12px"
            class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            ><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
        >
    </div>
    <ul
        class="dropdown-content z-[1] max-h-96 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl border-primary border-2"
    >
        {#each themes as theme}
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-ghost btn-sm btn-block justify-start text-primary"
                    aria-label={theme}
                    value={theme}
                    on:click={() => {
                        localStorage.setItem('theme', theme)
                        ls_theme = theme
                    }}
                    checked={theme === ls_theme}
                />
            </li>
        {/each}
    </ul>
</div>