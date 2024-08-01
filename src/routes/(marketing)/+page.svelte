<script lang="ts">
	import * as config from '$src/config';

    import { Sparkles, ArrowRight, CirclePlay, Joystick } from 'lucide-svelte';

    import { page } from '$app/stores';

    $: console.log($page.data.session);
</script>

<svelte:head>
    <title>{config.siteDescription} - {config.siteName}</title>
</svelte:head>

<div class="container max-w-screen-lg">

    <div class="flex flex-col items-center -mt-10 text-center justify-centertext-center pt-gap">
        <a href="/posts/gpt5" class="border-2 rounded-full text-dark border-dark/20 py-[0.25em] px-[0.8em] text-sm flex items-center gap-2 mb-5">
            <Sparkles class="w-[1em] h-[1em]" />
            <p><span class="font-bold">Update:</span> Assistants now run the GPT-5 LLM</p>
        </a>
        <h1 class="font-[800] leading-tight text-6xl mb-5">{config.siteDescription}</h1>
        <h2 class="max-w-screen-sm text-xl font-medium leading-normal text-center opacity-60 md:text-2xl lg:text-2xl xl:text-2xl">Trained on thosands of research papers, technical manuals, and online journals.</h2>
        <a href="/demo" class="mt-10 text-lg btn btn-primary">Try a demo</a>
    </div>

    <div class="flex flex-col gap-4 mx-auto mt-10 md:gap-5 lg:gap-6 xl:gap-7">
        <div class="flex justify-center -space-x-3 overflow-hidden shrink-0">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-1.webp">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-2.webp">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-3.webp">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-4.webp">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-5.webp">
            <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-6.webp">
            <img class="hidden border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 md:inline-block" alt="" src="images/customers/customer-7.webp">
            <img class="hidden border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 md:inline-block" alt="" src="images/customers/customer-8.jpg">
            <img class="hidden border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 md:inline-block" alt="" src="images/customers/customer-9.webp">
            <img class="hidden border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12 md:inline-block" alt="" src="images/customers/customer-10.webp">
        </div>   
        <!-- <div class="flex items-center justify-center gap-2 h-[16px] text-yellow-500 dark:text-yellow-300">
            <i class="-translate-y-10 opacity-0 fa-solid fa-star"></i>
            <i class="-translate-y-10 opacity-0 fa-solid fa-star"></i>
            <i class="-translate-y-10 opacity-0 fa-solid fa-star"></i>
            <i class="-translate-y-10 opacity-0 fa-solid fa-star"></i>
            <i class="-translate-y-10 opacity-0 fa-solid fa-star"></i>
        </div> -->
        <p class="text-sm text-center lg:text-base opacity-70 max-w-[300px] mx-auto">Used to assist and train hundreds of <span class="font-semibold">doctors &amp; practitioners</span></p>
    </div>   

</div>

<div class="container">
    <div class="mt-gap">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="w-full mx-auto border-4 shadow-2xl border-dark/5 bg-dark/10 rounded-3xl shadow-dark/10" src="video/reel.mp4" autoplay loop></video>
    </div>        
</div>

<div class="container max-w-screen-lg mt-gap">
    <p class="text-4xl font-semibold leading-snug">Integrate a powerful AI assistant in to your practice in less than 20 minutes. ChatTMS is trained on hundreds of peer reviewed research papers, machine manuals, and hundreds of hours of TMS video interviews.</p>
    
    <div class="flex items-center gap-8 mt-8">
        <a href="demo" class="flex items-center gap-2 text-xl font-semibold opacity-60 hover:opacity-100"><Joystick class="w-[1em] h-[1em]" /> Try a demo</a>
        <a href="video" class="flex items-center gap-2 text-xl font-semibold opacity-60 hover:opacity-100"><CirclePlay class="w-[1em] h-[1em]" /> Watch a training video</a>
    </div>
</div>

<div class="container">
    <div class="mx-auto mb-10 text-left mt-gap">
        <h2 class="mb-2 text-base font-bold tracking-widest uppercase opacity-50">Features</h2>
        <h2 class="text-4xl font-bold">More than just a language model</h2>
        <p class="mt-4 text-2xl font-medium leading-snug opacity-50">ChatTMS is built to help train staff, manage patient surveys, guide treatment options, and give second opinions for treatment diagnoses.</p>
    </div>
    
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-12">
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">TMS research</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Machine knowledge</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Off-label TMS use cases</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Customisable to your practice</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Remembers your practice &amp; patients</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative animate-fade-in">
            <div class="w-full mb-5 rounded-xl bg-dark/10 aspect-video"></div>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Generates patient reports</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
    </div>
    <!-- <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7 xl:gap-8">
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <i class="mb-4 text-2xl opacity-50 fa-regular fa-face-clouds" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">TMS research</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <i class="mb-4 text-2xl fa-regular fa-drone opacity-70" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Machine knowledge</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <i class="mb-4 text-2xl opacity-50 fa-regular fa-gamepad" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Off-label TMS use cases</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <span class="absolute right-8 top-8 font-semibold rounded-full bg-yellow-400/20 text-dark text-[0.9em] py-[0.4em] px-[0.75em]">Coming soon</span>
            <i class="mb-4 text-2xl fa-regular fa-camera-web opacity-70" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Customisable to your practice</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <span class="absolute right-8 top-8 font-semibold rounded-full bg-yellow-400/20 text-dark text-[0.9em] py-[0.4em] px-[0.75em]">Coming soon</span>
            <i class="mb-4 text-2xl fa-regular fa-microphone opacity-70" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Remembers your practice &amp; patients</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <span class="absolute right-8 top-8 font-semibold rounded-full bg-yellow-400/20 text-dark text-[0.9em] py-[0.4em] px-[0.75em]">Coming soon</span>
            <i class="mb-4 text-2xl opacity-50 fa-regular fa-screen-users" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Generates patient reports</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <span class="absolute right-8 top-8 font-semibold rounded-full bg-yellow-400/20 text-dark text-[0.9em] py-[0.4em] px-[0.75em]">Coming soon</span>
            <i class="mb-4 text-2xl opacity-50 fa-regular fa-vr-cardboard" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Recommends protocols</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
        <div class="relative p-8 border shadow-sm animate-fade-in rounded-xl shadow-dark/20 border-dark/20">
            <span class="absolute right-8 top-8 font-semibold rounded-full bg-yellow-400/20 text-dark text-[0.9em] py-[0.4em] px-[0.75em]">Coming soon</span>
            <i class="mb-4 text-2xl opacity-50 fa-regular fa-house-building" aria-hidden="true"></i>
            <h2 class="mb-1 text-base font-semibold md:text-lg lg:mb-2 lg:text-lg 2xl:text-xl">Identifies trends</h2>
            <p class="text-base font-medium opacity-50 md:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare, ut dignissim turpis ultrices.</p>
        </div>
    </div> -->
</div>


<div class="container mt-gap">
    <div class="flex items-start gap-4">
        <img class="inline-block border-2 rounded-full dark:border-dark border-light w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:h-12 xl:w-12" alt="" src="images/customers/customer-6.webp">
        <div class="flex flex-col gap-2">
            
        </div>
    </div>
    
</div>


<div class="container mt-gap">
    <div class="grid grid-cols-2 gap-gap">
        <div class="text-left">
            <h2 class="mb-2 text-base font-bold tracking-widest uppercase opacity-50">Affordable</h2>
            <h2 class="text-5xl font-bold">Simple pricing</h2>
            <p class="mt-4 text-2xl font-medium leading-snug opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar orci eget nunc ornare.</p>
        </div>
        <div class="flex flex-col p-10 bg-dark text-light rounded-2xl">
            <div>
                <span class="text-6xl font-bold">$99</span><span class="text-xl font-medium opacity-60"> / month</span>
            </div>
            <p class="mt-4 text-xl opacity-60">One price, all current and future features with a 14 day money-back guarantee.</p>
            <ul class="flex flex-col gap-4 pt-8 mt-8 text-lg border-t border-light/20">
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> AI TMS Assistant</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> All current + future training data</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> Patient surveys</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> Live, personalized product training</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> No price increases with an active subscription</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em]" /> 14 day money-back guarantee</li>
            </ul>
            <a href="/create-account" class="flex items-center mt-10 text-xl btn bg-light text-dark">Get started <ArrowRight class="w-[1.1em] h-[1.1em] ml-auto" /></a>
        </div>
        <!-- <div class="flex flex-col p-10 border shadow-sm border-dark/10 rounded-2xl shadow-dark/10">
            <div>
                <span class="text-6xl font-bold">$99</span><span class="text-xl font-medium opacity-60"> / month</span>
            </div>
            <p class="text-xl opacity-60">One price, all current and future features with a 14 day money-back guarantee.</p>
            <ul class="flex flex-col gap-4 pt-8 mt-8 text-lg border-t border-dark/20">
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> AI TMS Assistant</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> All current + future training data</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> Patient surveys</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> Live, personalized product training</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> No price increases with an active subscription</li>
                <li class="flex items-center gap-3"><ArrowRight class="w-[1em] h-[1em] opacity-30" /> 14 day money-back guarantee</li>
            </ul>
            <a href="get-started" class="flex items-center mt-10 text-xl btn btn-primary">Get started <ArrowRight class="w-[1.1em] h-[1.1em] ml-auto" /></a>
        </div> -->
    </div>
</div>

<style>
    /* #header{
        padding-top:calc(env(safe-area-inset-top, 0px)) !important;
    } */
</style>


