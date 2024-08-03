<script lang="ts">
	import * as config from '$src/config';
    import { Blocks } from 'lucide-svelte';
</script>

<svelte:head>
    <title>Surveys - {config.siteName}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center grow">
    <div class="max-w-[400px] text-center flex flex-col justify-center">
        <Blocks class="mx-auto mb-5 w-14 h-14 opacity-40" />
        <h2 class="text-2xl font-bold">Patients coming soon</h2>
        <p class="mt-2 text-xl opacity-50">We're working to release patient surveys soon. Watch this space!</p>
        <a href="/assistant" class="mx-auto mt-6 text-base btn btn-primary">Go to Assistant</a>
    </div>
</div>