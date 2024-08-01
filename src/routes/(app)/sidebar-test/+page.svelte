<script lang="ts">
	import * as config from '$src/config';
    import Sidebar from '$src/components/app/Sidebar.svelte';
</script>

<svelte:head>
    <title>Dashboard - {config.siteName}</title>
</svelte:head>
  
<Sidebar side="left">
    <h2>Left Sidebar</h2>
    <p>This is the left sidebar content.</p>
</Sidebar>

<Sidebar side="right">
    <h2>Right Sidebar</h2>
    <p>This is the right sidebar content.</p>
</Sidebar>
  
<div class="flex items-start">
    <div class="">
        <h1 class="text-4xl font-semibold">Dashboard2</h1>

    </div>
    <div class="flex items-center gap-4 ml-auto">
        <a href="/surveys/new-survey" class="btn">Open assistant</a>
        <a href="/surveys/new-survey" class="btn btn-primary">New survey</a>
    </div>
</div>