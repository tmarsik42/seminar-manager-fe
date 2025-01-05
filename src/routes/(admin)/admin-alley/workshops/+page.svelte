<script lang="ts">
    import DataTable from '$lib/components/DataTable.svelte';

    const { data } = $props();

    const workshops = $derived(data.workshops);
    const headers = [
        { label: 'Name', key: 'name', sortable: true },
        { label: 'Status', key: 'status', sortable: true },
        { label: 'Organizer ID', key: 'organizer_id', sortable: true },
        { label: 'Language', key: 'language', sortable: true }
    ];

    $inspect(workshops);
</script>

<DataTable data={workshops.data} headers={headers}>
    {#snippet actions(row)}
        <a href="/admin-alley/workshops/{row.id}">Detail</a>
    {/snippet}
</DataTable>
