<script lang="ts">
    import '../../../app.css';
    import SideNav from '$lib/components/SideNav.svelte';
    import mkLogo from '$lib/assets/mk-logo.png';

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

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    a {
        display: flex;
        align-items: center;
        gap: var(--tdk-spacing-sm);
        padding: var(--tdk-spacing-md);
        margin-bottom: var(--tdk-spacing-sm);
        text-decoration: none;
        color: var(--tdk-hover-color);
        border-radius: 16px;

        &:hover {
            background-color: var(--tdk-hover-bgcolor);
        }
    }
</style>

<SideNav title="Admin Alley" subtitle="Animefest 2025">
    {#snippet logo()}
        <img src={mkLogo} alt="Fashion Alley" />
    {/snippet}

    {#snippet menuItems()}
        <a href="/admin-alley/lectures">
            <span class="icon">📚</span>
            Přehled přednášek
        </a>
        <a href="/admin-alley/workshops">
            <span class="icon">🎤</span>
            Přehled workshopů
        </a>
    {/snippet}
</SideNav>

<main>
    {@render children()}
</main>
