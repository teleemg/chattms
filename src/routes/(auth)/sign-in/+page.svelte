<script lang="ts">
    import { SignIn } from "@auth/sveltekit/components"
    import { providerMap } from "$lib/auth/authProviders"

    console.log(providerMap);
</script>


<div class="flex flex-col max-w-screen-sm">
    
    {#each providerMap as provider}
        <SignIn provider={provider.id} signInPage="sign-in"className="w-full">
            <div slot="submitButton">
                <span>Signin with {provider.name}</span>
            </div>
        </SignIn>
    {/each}
</div>    
