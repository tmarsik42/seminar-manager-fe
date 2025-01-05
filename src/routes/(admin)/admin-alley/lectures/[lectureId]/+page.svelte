<script lang="ts">
    const { data } = $props();

    const lecture = $derived(data.lecture);
</script>

<pre>
    {JSON.stringify(lecture, null, 2)}
</pre>
