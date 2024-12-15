<script lang="ts">
    import { enhance } from '$app/forms';

    const { form }: { form: { error: string } } = $props();
</script>

<h1>Žádost o přednášku</h1>

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
        Řekněte nám něco o sobě
        <textarea name="organizer.info" autocomplete="off" required></textarea>
    </label>

    <label>
        Název přednášky
        <input name="name" type="text" autocomplete="off" required />
    </label>

    <label>
        Anotace přednášky
        <input name="description" type="text" autocomplete="off" required />
    </label>

    <label>
        Obsah přednášky
        <textarea name="additional_info" autocomplete="off" required></textarea>
    </label>

    <button type="submit" class="button">Odeslat</button>
</form>
