<script lang="ts">
    const { icon, text, href }: { icon: string; text: string; href: string } = $props();
</script>

<style lang="scss">
    a {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        border: 1px solid var(--tdk-secondary-color);
        border-radius: 16px;
        cursor: pointer;
        text-decoration: none;
        color: black;

        &:hover {
            background-color: var(--tdk-hover-bgcolor);
        }

        .icon {
            margin-right: 1rem;
            font-size: 2rem;
        }
    }
</style>

<a href={href}>
    {#if icon}
        <span class="icon">{icon}</span>
    {/if}

    {text}
</a>
