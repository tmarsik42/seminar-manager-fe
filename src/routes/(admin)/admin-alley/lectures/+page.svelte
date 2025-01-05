<script lang="ts">
    import DataTable from '$lib/components/DataTable.svelte';

    const { data } = $props();

    const lectures = $derived(data.lectures);
    const headers = [
        { label: 'Name', key: 'name', sortable: true },
        { label: 'Status', key: 'status', sortable: true },
        { label: 'Organizer ID', key: 'organizer_id', sortable: true },
        { label: 'Language', key: 'language', sortable: true }
    ];

    $inspect(lectures);
</script>

<DataTable data={lectures.data} headers={headers}>
    {#snippet actions(row)}
        <a href="/admin-alley/lectures/{row.id}">Detail</a>
    {/snippet}
</DataTable>
