<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header.svelte';

    let { children } = $props();
</script>

<style lang="scss">
    main {
        margin-left: 200px;
        padding: 1px 16px;
        height: 1000px;

        @include respond-to(sm) {
            margin-left: 0;
        }
    }
</style>

<Header />

<main>
    {@render children()}
</main>
