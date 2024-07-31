<script lang="ts">
	import * as config from '$src/config';
</script>

<svelte:head>
    <title>Surveys - {config.siteName}</title>
</svelte:head>

<div class="flex items-start">
    <div class="">
        <h1 class="text-4xl font-semibold">Surveys</h1>
    </div>
    <div class="flex items-center gap-4 ml-auto">
        <a href="/surveys/new-survey" class="btn btn-primary">New survey</a>
    </div>
</div>