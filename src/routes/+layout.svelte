<script lang="ts">
    import '../app.css';
    import SideNav from '$lib/components/SideNav.svelte';

    let { children } = $props();
</script>

<style lang="scss">
    main {
        margin-left: 15rem;
        padding: calc(2 * var(--tdk-spacing-xl)) 10% 0 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<SideNav />

<main>
    {@render children()}
</main>
