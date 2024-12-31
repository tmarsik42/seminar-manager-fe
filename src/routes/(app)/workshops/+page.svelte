<script>
    import CallToActionLink from '$lib/components/CallToActionLink.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import CtaGroup from '$lib/components/CtaGroup.svelte';
</script>

<Heading text="Workshopy" />

<CtaGroup>
    <CallToActionLink icon="👍" text="Chci pořádat workshop" href="/workshops/request" />

    <CallToActionLink icon="🧐" text="Chci se přihlásit na workshop" href="/workshops/attend" />
</CtaGroup>
