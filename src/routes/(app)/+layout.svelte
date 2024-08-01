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

    let path;
    function getPath(currentPath) {
        path = currentPath;
    }
    $: getPath($page.url.pathname);


    let mainScreen: HTMLElement;
    let sidebarLeft: HTMLElement;
    let sidebarRight: HTMLElement;
    let headerNav: HTMLElement;


</script>

<Announcement/>

<div class="w-screen h-screen overflow-hidden text-lg antialiased xl:flex xl:flex-row xl:flex-nowrap bg-dark/10 scrollbar-none overscroll-none select-none lg:select-auto;">
   
    <aside id="sidebar-left" class="shrink-0 sidebar overscroll-contain -translate-x-full bg-light max-w-[400px] w-[85vw] h-full fixed top-0 left-0 bottom-0 items-start overflow-y-auto scrollbar-none overflow-x-hidden border-color-10 box-border z-20 border-r-0 xl:border-r">    
        <div class="box-border flex flex-col w-full h-full p-8">
            <div class="flex items-center gap-4">
                Hello
            </div>
        </div>
    </aside>

    <aside id="sidebar-right" class="sidebar translate-x-full bg-light  max-w-[400px] w-[85vw] fixed top-0 right-0 bottom-0 h-screen items-start overflow-y-auto scrollbar-none overflow-x-hidden border-r-0 border-color-20 box-border z-20">
        <div class="flex flex-col h-full p-5 overflow-visible">
            Nice
        </div>
    </aside>

    <main id="main-screen" class="fixed inset-0 z-10 flex flex-col w-full max-h-screen overflow-x-hidden overflow-y-auto bg-light overscroll-none scrollbar-none">
        
        <div class="flex items-center gap-10 min-h-[85px] px-[25px] border-b border-dark/15">
            <a class="block w-[35px]" href="/dashboard">
                <img src="/images/logo-icon.svg" alt="ChatTMS">
            </a>
            <nav class="flex items-center gap-8 text-base font-medium">
                <a href="/dashboard" class="hover:opacity-80 {path === '/dashboard' ? 'opacity-100' : 'opacity-40'}">Dashboard</a>
                <a href="/assistant" class="hover:opacity-80 {path === '/assistant' ? 'opacity-100' : 'opacity-40'}">Assistant</a>
                <a href="/surveys" class="hover:opacity-80 p-1 {path === '/surveys' ? 'opacity-100' : 'opacity-40'}">Surveys</a>
            </nav>
            <nav class="flex items-center gap-8 ml-auto">
                <a href="/account/settings" class="p-2 -m-2 {path === '/account/settings' ? 'opacity-100' : 'opacity-40'}">
                    <Settings class="w-[22px] h-[22px]" />
                </a>
                <a href="/account/notifications" class="p-2 -m-2 {path === '/account/notifications' ? 'opacity-100' : 'opacity-40'}">
                    <Bell class="w-[22px] h-[22px]" />
                </a>
                <a href="/account/profile" class="block w-[40px] h-[40px]">
                    <img class="w-full h-full rounded-full" src="/images/profile.jpg" alt="Henry">
                </a>
            </nav>
        </div>
        
        <div class="flex flex-col p-10 grow">
            <slot />
            <div class="mt-gap">
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
    </main> 
</div>

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

<style>
    #sidebar-left, #sidebar-right {
        will-change: transform;
        overscroll-behavior-y: contain;
        padding-top: calc(env(safe-area-inset-top, 0px)) !important;
    }
    main {
        will-change: transform;
        -webkit-overflow-scrolling: touch;
        overscroll-behavior-y: contain;
    }
    #header-nav {
        padding-top: calc(env(safe-area-inset-top, 0px)) !important;
    }
    #footer-nav {
        padding-bottom: calc(env(safe-area-inset-bottom, 0px)/2) !important;
    }
</style>