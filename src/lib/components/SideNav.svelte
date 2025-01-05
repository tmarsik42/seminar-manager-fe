<script lang="ts">
    import type { Snippet } from 'svelte';

    const {
        title,
        subtitle,
        logo,
        menuItems
    }: { title: string; subtitle: string; logo: Snippet; menuItems: Snippet } = $props();
</script>

<style lang="scss">
    nav {
        width: 15rem;
        background-color: var(--tdk-primary-color);
        position: fixed;
        height: 100%;
        overflow: auto;
        padding: var(--tdk-spacing-md);
        border-right: 1px solid var(--tdk-subtle-border-color);

        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: var(--tdk-spacing-lg);
            padding: var(--tdk-spacing-md) 0;
            text-align: center;

            .avatar {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                background-color: var(--tdk-secondary-color);
                margin: var(--tdk-spacing-sm);

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }

            .info {
                .title {
                    font-weight: bold;
                }

                .subtitle {
                    font-size: 0.9rem;
                    color: var(--tdk-text-muted);
                }
            }
        }

        .menu-group {
            margin-bottom: var(--tdk-spacing-lg);

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
        }
    }
</style>

<nav>
    <div class="profile">
        <div class="avatar">
            {@render logo()}
        </div>
        <div class="info">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>

    <div class="menu-group">
        {@render menuItems()}
    </div>
</nav>
