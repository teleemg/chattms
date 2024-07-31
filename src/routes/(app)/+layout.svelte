<script lang="ts">
    import '$src/app.css';
    import * as config from '$src/config';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
	import { SignIn, SignOut } from '@auth/sveltekit/components';

    import Announcement from '$src/components/Announcement.svelte';
    import { Bell, Settings} from 'lucide-svelte';

    function isActive(path: string) {
        console.log($page.url.pathname)
       return $page.url.pathname.startsWith(path);
    }
</script>

<Announcement/>

<div class="flex items-center gap-10 h-[85px] px-[25px] border-b border-dark/15">
    <a class="block w-[35px]" href="/dashboard">
        <img src="/images/logo-icon.svg" alt="ChatTMS">
    </a>
    <nav class="flex items-center gap-8 text-base">
        <a href="/dashboard" class="hover:opacity-80 {isActive('/dashboard') ? 'opacity-100' : 'opacity-50'}">Dashboard</a>
        <a href="/assistant" class="hover:opacity-80 {isActive('/assistant') ? 'opacity-100' : 'opacity-50'}">Assistant</a>
        <a href="/surveys" class="hover:opacity-80 p-1 {isActive('/surveys') ? 'opacity-100' : 'opacity-50'}">Surveys</a>
    </nav>
    <nav class="flex items-center gap-8 ml-auto">
        <a href="/account/settings" class="p-2 -m-2 {isActive('account/settings') ? 'opacity-100' : 'opacity-50'}">
            <Settings class="w-[22px] h-[22px]" />
        </a>
        <a href="/account/notifications" class="p-2 -m-2 {isActive('account') ? 'opacity-100' : 'opacity-50'}">
            <Bell class="w-[22px] h-[22px]" />
        </a>
        <a href="/account/profile" class="block w-[40px] h-[40px]">
            <img class="w-full h-full rounded-full" src="/images/profile.jpg" alt="Henry">
        </a>
    </nav>
</div>

<main class="p-10"> 
    <slot/>

    <div class="mt-gap">
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
</main>



<!-- <div class="flex">
    <aside class="h-screen p-10 bg-dark/10 w-full max-w-[300px] flex flex-col box-border gap-10 overflow-y-auto scrollbar-none">
        <a class="block w-[45px] md:w-[55px]" href="https://cloudneuro.com"><img src="https://cloudneuro.com/wp-content/themes/cloudneuro/library/images/logo-icon.png" alt=""></a>
        <nav class="flex flex-col w-full gap-10 mb-auto">

            <ul class="text-base font-medium">
                <li class="mb-2 text-xs font-semibold tracking-wider uppercase opacity-50">Admin</li>
                <li>
                    <a href="/admin" class="block px-4 py-2 rounded-lg opacity-100 hover:bg-dark/5 hover:opacity-100 bg-dark/5"><i class="fa-regular fa-sharp fa-gauge w-[30px] text-base" aria-hidden="true"></i> Dashboard</a>
                    <a href="/admin/tms/customers" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-user-doctor w-[30px] text-base" aria-hidden="true"></i> TMS Customers</a>
                    <a href="/admin/emg/customers" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-user-doctor-hair-long w-[30px] text-base" aria-hidden="true"></i> EMG Customers</a>
                </li>
            </ul>

            <ul class="text-base font-semibold">
                <li class="mb-2 text-xs font-semibold tracking-wider uppercase opacity-50">Account</li>
                <li>
                    <a href="/admin/account/edit-account/" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-users w-[30px] text-base" aria-hidden="true"></i> Profile</a>
                </li>
                <li>
                    <a href="/admin/account/orders/" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-box-open w-[30px] text-base" aria-hidden="true"></i> Orders</a>
                </li>
                <li>
                    <a href="/admin/account/subscriptions/" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-cloud-upload w-[30px] text-base" aria-hidden="true"></i> Subscriptions</a>
                </li>
                <li>
                    <a href="/admin/account/edit-address/" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-map w-[30px] text-base" aria-hidden="true"></i> Addresses</a>
                </li>
                <li>
                    <a href="/admin/account/payment-methods/" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-credit-card w-[30px] text-base" aria-hidden="true"></i> Payment methods</a>
                </li>
                <li>
                    <a href="https://cloudneuro.com/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fcloudneuro.com&amp;_wpnonce=76484c7cdb" class="block px-4 py-2 rounded-lg opacity-50 hover:bg-dark/5 hover:opacity-100"><i class="fa-regular fa-sharp fa-sign-out w-[30px] text-base" aria-hidden="true"></i> Log out</a>
                </li>
            </ul>
        </nav>
        <div class="flex items-start">
            <a href="/account" data-page="profile" class="flex flex-col h-full gap-3 text-base">
                </a><div class="flex items-center gap-4"><a href="/account" data-page="profile" class="flex flex-col h-full gap-3 text-base">
                    <span class="rounded-full w-[44px] h-[44px] bg-dark/10 flex items-center justify-center">
                        <img class="block h-auto rounded-full" src="https://secure.gravatar.com/avatar/1a14abb6033f69c20b941f28df98a52b?s=200&amp;d=mm&amp;r=g">
                    </span>
                    </a><div><a href="/account" data-page="profile" class="flex flex-col h-full gap-3 text-base">
                        </a><a href="/account/" class="font-medium leading-none flex items-center gap-1.5 text-sm">contact@henrybrown.me</a>
                    </div>
                </div>
            
        </div>
    </aside>
    <main class="p-10">
        <slot />
    </main>
</div> -->

{#if dev}
    <div class="fixed bottom-0 right-0 z-50 flex flex-row items-center justify-center font-medium bg-gray-900 opacity-50 w-9 h-9 text-light">
        <span class="md:hidden">SM</span>
        <span class="hidden md:block lg:hidden">MD</span>
        <span class="hidden lg:block xl:hidden">LG</span>
        <span class="hidden xl:block 2xl:hidden">XL</span>
        <span class="hidden 2xl:block 3xl:hidden">2XL</span>
        <span class="hidden 3xl:block 4xl:hidden">3XL</span>
        <span class="hidden 4xl:block 5xl:hidden">4XL</span>
        <span class="hidden 5xl:block">5XL</span>
    </div>
{/if}