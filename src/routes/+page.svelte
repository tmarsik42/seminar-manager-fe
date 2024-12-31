<script lang="ts">
    import CallToActionLink from '$lib/components/CallToActionLink.svelte';
    import Button from '$lib/components/Button.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import CtaGroup from '$lib/components/CtaGroup.svelte';

    let dialog: HTMLDialogElement;
    const openModal = () => {
        dialog.showModal();
    };
</script>

<style lang="scss">
    .rules {
        margin-top: calc(3 * var(--tdk-spacing-xl));
    }

    dialog {
        min-width: 30vw;
    }
</style>

<Heading text="Podílej se na programu Fashion&nbsp;Alley" />

<CtaGroup>
    <CallToActionLink icon="👍" text="Chci pořádat workshop" href="/workshops/request" />

    <CallToActionLink icon="🧐" text="Chci se přihlásit na workshop" href="/workshops/attend" />

    <CallToActionLink icon="👍" text="Chci udělat přednášku" href="/lectures/request" />
</CtaGroup>

<section class="rules">
    <Button text="Pravidla" icon="📄" onclick={openModal} />
</section>

<dialog bind:this={dialog}>
    <h2>Rules</h2>
    <p>1. Be respectful.</p>
    <p>2. Follow the guidelines.</p>
    <p>3. No spamming.</p>
    <button onclick={() => dialog.close()}>Zavřít</button>
</dialog>
