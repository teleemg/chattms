<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="flex flex-col overflow-hidden min-w-screen max-w-screen">
	<div class="absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-center mix-blend-difference leading-[1]">
		<div class="font-extrabold text-light text-[30vw]">{$page.status}</div>
		<a href="/" class="text-2xl btn btn-light">Back to home</a>
	</div>

	{#if $page.status === 404}
		<div class="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col">
			<div class="flex flex-col h-[75%] w-full items-stretch">
				<div class="grid grid-cols-7 h-[85%]">
					<div class="bg-[#cccccc]"></div>
					<div class="bg-[#ffff00]"></div>
					<div class="bg-[#00ffff]"></div>
					<div class="bg-[#00ff00]"></div>
					<div class="bg-[#ff00ff]"></div>
					<div class="bg-[#ff0000]"></div>
					<div class="bg-[#0000ff]"></div>
				</div>
				<div class="grid grid-cols-7 h-[15%]">
					<div class="bg-[#0000ff]"></div>
					<div class="bg-[#131313]"></div>
					<div class="bg-[#ff00ff]"></div>
					<div class="bg-[#131313]"></div>
					<div class="bg-[#00ffff]"></div>
					<div class="bg-[#131313]"></div>
					<div class="bg-[#cccccc]"></div>
				</div>
			</div>
			<div class="grid grid-cols-7 h-[25%]">
				<div class="grid h-full grid-cols-4 col-span-5">
					<div class="bg-[#083e59]"></div>
					<div class="bg-[#ffffff]"></div>
					<div class="bg-[#3a007e]"></div>
					<div class="bg-[#131313]"></div>
				</div>
				<div class="grid grid-cols-3">
					<div class="bg-[#000000]"></div>
					<div class="bg-[#131313]"></div>
					<div class="bg-[#262626]"></div>
				</div>
				<div class="bg-[#131313]"></div>
			</div>
		</div>
	{/if}
</main>
