<script type="ts">
    
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
            <a href="/auth/sign-out" class="py-2.5 mt-auto text-lg opacity-70 hover:opacity-100">Sign out</a>
        </nav>
    </div>

    <div class="flex flex-col h-full p-16 grow">
        <slot></slot>
    </div>
    
</div>