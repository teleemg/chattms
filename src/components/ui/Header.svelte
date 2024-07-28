<script lang="ts">
	import * as config from '$src/config';
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
    import Announcement from '$src/components/ui/Announcement.svelte';
</script>

<Announcement/>

<div class="flex items-center w-full gap-8 p-8">
    <div class="flex items-center">
        <a href="/" class="w-full max-w-[180px]">
            <img src="images/logo.svg" class="block w-full h-auto" alt="ChatTMS">
        </a>
    </div>
    <nav class="flex items-center justify-end w-full gap-8 font-medium">
        <a href="/features" class="transition opacity-60 hover:opacity-100">Features</a>
        <a href="/demo" class="transition opacity-60 hover:opacity-100">Demo</a>
        <a href="/pricing" class="transition opacity-60 hover:opacity-100">Pricing</a>
        <a href="/faq" class=" transition-[50] opacity-60 hover:opacity-100">Login</a>
    </nav>
    <div class="flex items-center">
        <a href="/pricing" class="border-2 btn bg-dark/10">Get started</a>
    </div>
</div>