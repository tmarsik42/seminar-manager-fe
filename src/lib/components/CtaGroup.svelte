<script lang="ts">
    import type { Snippet } from 'svelte';

    const { children }: { children: Snippet } = $props();
</script>

<style lang="scss">
    .ctas {
        margin-top: calc(3 * var(--tdk-spacing-xl));
        display: flex;
        gap: var(--tdk-spacing-md);
        flex-direction: column;
    }
</style>

<section class="ctas">
    {@render children()}
</section>
