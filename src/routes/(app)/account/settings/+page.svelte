<script lang="ts">
	import * as config from '$src/config';
</script>

<svelte:head>
    <title>Settings - {config.siteName}</title>
</svelte:head>




<div class="flex items-start h-full grow">

    <div class="w-full max-w-[350px] border-r border-dark/10 bg-dark/5 p-12 flex flex-col grow h-full">
        <h1 class="text-2xl font-medium leading-none">Account</h1>

        
        <nav class="flex flex-col mt-8 grow">
            <a href="/profile" class="py-2.5 text-lg opacity-60 hover:opacity-100">Profile</a>
            <a href="/profile" class="py-2.5 text-lg opacity-60 hover:opacity-100">Notifications</a>
            <a href="/profile" class="py-2.5 text-lg opacity-60 hover:opacity-100">Billing</a>
            <a href="/profile" class="py-2.5 text-lg opacity-100 hover:opacity-100 font-semibold border-r-4">Settings</a>
            <a href="/profile" class="py-2.5 text-lg opacity-60 hover:opacity-100">Help center</a>
            <!-- <a href="/profile" class="py-2.5 mt-auto text-lg opacity-70 hover:opacity-100">Log out</a> -->
        </nav>
    </div>

    <div class="flex flex-col h-full p-16 grow">
        <div class="pb-10 mb-10 border-b border-dark/10">
            <h1 class="mb-5 text-3xl leading-none">Settings</h1>
            <p class="text-xl opacity-50">Update your account settings below.</p>
        </div>
        

    </div>

</div>