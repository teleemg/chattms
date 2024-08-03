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
        <h2 class="text-2xl font-bold">Surveys coming soon</h2>
        <p class="mt-2 text-xl opacity-50">We're working to release patient surveys soon. Watch this space!</p>
        <a href="/assistant" class="mx-auto mt-6 text-base btn btn-primary">Go to Assistant</a>
    </div>
</div>

<!-- <div class="flex items-start mb-10">
    <div class="">
        <h1 class="text-4xl font-bold">Surveys</h1>
    </div>
    <div class="flex items-center gap-4 ml-auto">
        <a href="/surveys/new-survey" class="btn btn-primary">New survey</a>
    </div>
</div>

<div class="grid grid-cols-4 gap-8 mb-10">
    <div class="flex flex-col gap-0 p-5 border rounded-xl border-dark/20">
        <span class="opacity-50 ">Total surveys</span>
        <span class="text-3xl font-semibold">4,323</span>
    </div>
    <div class="flex flex-col gap-0 p-5 border rounded-xl border-dark/20">
        <span class="opacity-50 ">Response rate</span>
        <span class="text-3xl font-semibold">43.1%</span>
    </div>
    <div class="flex flex-col gap-0 p-5 border rounded-xl border-dark/20">
        <span class="opacity-50 ">Avg improvement</span>
        <span class="text-3xl font-semibold">65.5%</span>
    </div>
    <div class="flex flex-col gap-0 p-5 border rounded-xl border-dark/20">
        <span class="opacity-50 ">Patients</span>
        <span class="text-3xl font-semibold">456</span>
    </div>
</div>

<div class="flex items-center">
    <nav class="flex items-center gap-4 mb-10 font-medium">
        <a href="/surveys" class="font-semibold">All</a>
        <a href="/surveys/complete" class="opacity-40">Complete</a>
        <a href="/surveys/send" class="opacity-40">Sent</a>
        <a href="/surveys/overdue" class="opacity-40">Overdue</a>
    </nav>
    <div class="ml-auto">
        <span class="opacity-50">Date range here</span>
    </div>
</div>

<table>
    <thead class="text-left">
        <tr>
            <th><input type="checkbox"></th>
            <th>Patient</th>
            <th>Survey</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Status</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="checkbox"></td>
            <td> Patient name</td>
            <td>Survey type</td>
            <td>01/01/2024</td>
            <td>02/02/2024</td>
            <td>Complete</td>
            <td class="flex justify-end"><button class="text-sm btn">View</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td> Patient name</td>
            <td>Survey type</td>
            <td>01/01/2024</td>
            <td>02/02/2024</td>
            <td>Complete</td>
            <td class="flex justify-end"><button class="text-sm btn">View</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td> Patient name</td>
            <td>Survey type</td>
            <td>01/01/2024</td>
            <td>02/02/2024</td>
            <td>Complete</td>
            <td class="flex justify-end"><button class="text-sm btn">View</button></td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td> Patient name</td>
            <td>Survey type</td>
            <td>01/01/2024</td>
            <td>02/02/2024</td>
            <td>Complete</td>
            <td class="flex justify-end"><button class="text-sm btn">View</button></td>
        </tr>
    </tbody>
</table> -->
