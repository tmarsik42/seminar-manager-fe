<script lang="ts">
    const { text }: { text: string } = $props();
</script>

<style lang="scss">
    .headings {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        h1 {
            text-align: center;
        }

        span {
            font-size: var(--tdk-primary-size-xl);
        }
    }
</style>

<section class="headings">
    <span>✨&nbsp;</span>
    <h1>{text}</h1>
    <span>✨&nbsp;</span>
</section>
