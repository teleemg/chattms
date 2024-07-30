<script lang="ts">
	import * as config from '$src/config';
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
    import Announcement from '$src/components/Announcement.svelte';
</script>

<Announcement/>

<div id="navbar" class="z-30 flex items-center w-full gap-8 p-10 border-b border-dark/0 bg-light/80 dark:bg-dark/20">
    <div class="flex items-center">
        <a href="/" id="navbar-logo" class="w-full max-w-[180px]">
            <img src="images/logo.svg" class="block w-full h-auto" alt="ChatTMS">
        </a>
    </div>
    <nav class="flex items-center justify-end w-full gap-8 font-medium">
        <a href="/features" class="transition opacity-60 hover:opacity-100">Features</a>
        <a href="/demo" class="transition opacity-60 hover:opacity-100">Demo</a>
        <a href="/pricing" class="transition opacity-60 hover:opacity-100">Pricing</a>
        <a href="/dashboard" class=" transition-[50] opacity-60 hover:opacity-100">Dashboard</a>
    </nav>
    <div class="flex items-center">

        <!-- <img alt="User avatar" src={$page.data?.session?.user?.image ?? "https://source.boringavatars.com/marble/120"} class="avatar"/> -->
        {#if $page.data.session}
            <SignOut signOutPage="sign-out" className="">
                <div slot="submitButton" class="border-2 btn bg-dark/10">Sign out</div>
            </SignOut>
        {:else}
            <SignIn signInPage="sign-in" className="">
                <div slot="submitButton" class="border-2 btn bg-dark/10">Sign in</div>
            </SignIn>
        {/if}

    </div>
</div>