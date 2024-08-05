<script type="ts">
    import { SignIn, SignOut } from '@auth/sveltekit/components';
    import { page } from '$app/stores';

    let path;
    function getPath(currentPath) {
        path = currentPath;
    }
    $: getPath($page.url.pathname);
</script>

<div class="flex items-start h-full grow">

    <div class="w-full max-w-[350px] border-r border-dark/10 bg-dark/5 p-12 flex flex-col grow h-full overflow-y-auto">
        <h1 class="text-2xl font-medium leading-none">Account</h1>
        <nav class="flex flex-col mt-8 grow">
            <a href="/account/profile" class="py-2.5 text-lg hover:opacity-100 {path === '/account/profile' ? 'opacity-100' : 'opacity-50'}">Profile</a>
            <a href="/account/notifications" class="py-2.5 text-lg hover:opacity-100 {path === '/account/notifications' ? 'opacity-100' : 'opacity-50'}">Notifications</a>
            <a href="/account/billing" class="py-2.5 text-lg hover:opacity-100 {path === '/account/billing' ? 'opacity-100' : 'opacity-50'}">Billing</a>
            <a href="/account/settings" class="py-2.5 text-lg hover:opacity-100 {path === '/account/settings' ? 'opacity-100' : 'opacity-50'}">Settings</a>
            <a href="/account/help-center" class="py-2.5 text-lg hover:opacity-100 {path === '/account/help-center' ? 'opacity-100' : 'opacity-50'}">Help center</a>
            <SignOut signOutPage="sign-out" className="py-2.5 mt-auto text-lg opacity-70 hover:opacity-100">
                <div slot="submitButton" class="">Sign out</div>
            </SignOut>
            <!-- <div class="mt-gap">
                {#if $page.data.session}
                    <SignOut signOutPage="sign-out" className="">
                        <div slot="submitButton" class="border-2 btn bg-dark/10">Sign out</div>
                    </SignOut>
                {:else}
                    <SignIn signInPage="sign-in" className="">
                        <div slot="submitButton" class="border-2 btn bg-dark/10">Sign in</div>
                    </SignIn>
                {/if}
            </div> -->
        </nav>
    </div>

    <div class="flex flex-col h-full p-16 grow">
        <slot></slot>
    </div>
    
</div>