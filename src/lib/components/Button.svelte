<script lang="ts">
    const { text, icon, onclick }: { text: string; icon: string; onclick: () => void } = $props();
</script>

<style lang="scss">
    button {
        background-color: black;
        color: white;
        border-radius: 16px;
        padding: var(--tdk-spacing-sm) var(--tdk-spacing-md);
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
</style>

<button onclick={onclick}>
    {text}
    {icon}
</button>
