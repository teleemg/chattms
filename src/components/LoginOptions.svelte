<script lang="ts">
    import { enhance } from "$app/forms";
    import { providerMap } from "$lib/auth/authProviders";
    import { page } from '$app/stores';
    import { Github } from 'lucide-svelte';
    let email = "";
    function getCallbackUrl() {
        return $page.url.searchParams.get('callbackUrl') || '/';
    }
</script>


{#each providerMap as provider}

    {#if provider.id === "postmark" || provider.id === "email"}
        <span class="block w-full text-sm font-semibold text-center opacity-50">OR</span>
    {/if}

    <form method="POST" action={`/sign-in`} use:enhance class="" >
        <input type="hidden" name="providerId" value={provider.id} />
        <input type="hidden" name="callbackUrl" value={getCallbackUrl()} />

        {#if provider.id === "postmark" || provider.id === "email"}
            
            <div class="flex flex-col gap-2 p-6 border rounded-lg border-dark/20">
                <input id={`input-email-for-${provider.id}-provider`} class="bg-dark/5 py-[0.65em] px-[1.25em] outline-none rounded-lg" type="email" name="email" bind:value={email} placeholder="email@example.com" required />
                <button class="btn btn-primary" type="submit">
                    Email login link
                </button>
            </div>
        {:else}
            <button class="flex items-center justify-center w-full gap-2 btn bg-dark/10" type="submit">
                {#if provider.id == "github"}
                    <Github class="fill-dark w-[1em] h-[1em]" />
                {/if}
                Sign in with {provider.name}
            </button>
        {/if}
        
    </form>
{/each}