<script lang="ts">
    import type { Snippet } from 'svelte';

    const {
        data,
        headers,
        actions
    }: {
        data: unknown[];
        headers: { label: string; key: string; sortable: boolean }[];
        actions: Snippet;
    } = $props();

    let dataCopy = $state(data);
    let sortKey: string | null = $state(null);
    let sortDirection: 'asc' | 'desc' = $state('asc');

    const sortData = (key: string) => {
        if (sortKey === key) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortKey = key;
            sortDirection = 'asc';
        }

        dataCopy = [...dataCopy].sort((a, b) => {
            if (a[key] < b[key]) return sortDirection === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        background-color: var(--tdk-primary-color);

        th,
        td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid var(--tdk-subtle-border-color);

            &:last-child {
                text-align: center;
            }
        }

        th {
            cursor: pointer;
            font-weight: bold;
            background-color: var(--tdk-secondary-color);
            text-transform: uppercase;
        }
    }
</style>

<table>
    <thead>
        <tr>
            {#each headers as { label, key, sortable }}
                <th onclick={() => sortable && sortData(key)}>
                    {label}
                    {#if sortable}
                        <span>
                            {sortKey === key ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
                        </span>
                    {/if}
                </th>
            {/each}
            <th></th>
        </tr>
    </thead>
    <tbody>
        {#if dataCopy && dataCopy?.length > 0}
            {#each dataCopy as row}
                <tr>
                    {#each headers as { key }}
                        <td>{row[key]}</td>
                    {/each}

                    {#if actions}
                        <td>
                            {@render actions(row)}
                        </td>
                    {/if}
                </tr>
            {/each}
        {/if}
    </tbody>
</table>
