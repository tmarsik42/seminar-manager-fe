<script lang="ts">
    import { enhance } from '$app/forms';

    type WorkshopType = {
        value: string;
        label: string;
    };

    const { data, form }: { data: { workshops: WorkshopType[] }; form: { error: string } } =
        $props();
    const workshops = $derived(data.workshops);

    let selectedOption = $state();
</script>

<h1>Přihláška na workshop</h1>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<form method="POST" use:enhance>
    <label>
        Přezdívka / jméno
        <input name="organizer.name" type="text" required />
    </label>

    <label>
        E-mail
        <input name="organizer.email" type="email" required />
    </label>

    <label>
        Telefon
        <textarea name="organizer.info" autocomplete="off" required></textarea>
    </label>

    <label>
        Workshop
        <select bind:value={selectedOption} id="select" name="select" required>
            {#each workshops as { value, label }}
                <option value={value} disabled={value === ''}>{label}</option>
            {/each}
        </select>

        <span>Selected: {selectedOption}</span>
    </label>

    <button type="submit" class="button">Odeslat</button>
</form>
