<script lang="ts">
    import LoginOptions from "$src/components/LoginOptions.svelte";
</script>

<div class="container max-w-[550px] flex flex-col gap-5">
    
    <div>
        <h1 class="mb-2 text-2xl font-bold">Create an account</h1>
        <p class="text-lg opacity-60">Select a sign in method to create an account.</p>
    </div>

    <LoginOptions />

</div>