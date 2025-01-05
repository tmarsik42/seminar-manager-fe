<script lang="ts">
    const { data } = $props();

    const workshop = $derived(data.workshop);
</script>

<pre>
    {JSON.stringify(workshop, null, 2)}
</pre>
