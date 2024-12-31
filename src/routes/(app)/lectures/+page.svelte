<script>
    import CallToActionLink from '$lib/components/CallToActionLink.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import CtaGroup from '$lib/components/CtaGroup.svelte';
</script>

<Heading text="Přednášky" />

<CtaGroup>
    <CallToActionLink icon="👍" text="Chci udělat přednášku" href="/lectures/request" />
</CtaGroup>
