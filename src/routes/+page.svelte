<script lang="ts">
    import CallToActionLink from '$lib/components/CallToActionLink.svelte';
    import Button from '$lib/components/Button.svelte';

    const openModal = () => {
        console.log('otevírám modal');
    };
</script>

<style lang="scss">
    .headings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .ctas {
        margin-top: calc(3 * var(--tdk-spacing-xl));
        display: flex;
        gap: var(--tdk-spacing-lg);
    }
</style>

<section class="headings">
    <h1>✨&nbsp;Podílej se na programu Fashion Alley&nbsp;✨</h1>
    <Button text="Pravidla" icon="📄" onclick={openModal} />
</section>

<section class="ctas">
    <CallToActionLink icon="👍" text="Chci pořádat workshop" href="/workshops/request" />

    <CallToActionLink icon="🧐" text="Chci se přihlásit na workshop" href="/workshops/attend" />

    <CallToActionLink icon="👍" text="Chci udělat přednášku" href="/lectures/request" />
</section>
