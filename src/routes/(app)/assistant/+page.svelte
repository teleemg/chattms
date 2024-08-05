<script lang="ts">
	import * as config from '$src/config';
    import { ArrowLeft, Plus, SendHorizontal } from 'lucide-svelte';
</script>

<svelte:head>
    <title>Assistant - {config.siteName}</title>
</svelte:head>

<div class="flex flex-col h-full p-10 grow">

    <div class="flex items-center -mt-3 text-sm">
        <div class="flex items-center gap-4">
            <span class="btn btn-transparent"><ArrowLeft class="w-[1.2em] h-[1.2em]" /> Conversations</span>
        </div>
        <div class="flex items-center gap-4 ml-auto">
            <span class="btn btn-transparent"><Plus class="w-[1.2em] h-[1.2em]" />New conversation</span>
        </div>
    </div>
    
    <div class="flex flex-col items-center justify-center h-full grow">

        <div id="chat-box" class="flex flex-col items-center justify-center h-full max-w-screen-md my-auto overflow-y-auto text-left grow">
            <div class="flex flex-col">
                <img src="/images/logo-icon.svg" class="w-[50px] mx-auto mb-5" alt="ChatTMS">
                <p class="text-2xl font-bold text-center">How can we help you today?</p>
            </div>
            <div class="hidden grid-cols-1 gap-3 mt-8 mb-3 text-sm md:grid md:grid-cols-2">
                <a class="p-5 rounded-lg bg-dark/5 hover:bg-dark/10" href="#" data-instruction="What is the most effective protocol overall according to customer data?">
                    <strong>What is the most effective protocol overall </strong>according to the CloudTMS dataset?
                </a>
                <a class="p-5 rounded-lg bg-dark/5 hover:bg-dark/10" href="#" data-instruction="What TMS protocols are currently FDA approved for treating depression in the US?">
                    <strong>What TMS protocols are currently FDA approved</strong> for treating depression in the US?
                </a>
                <a class="p-5 rounded-lg bg-dark/5 hover:bg-dark/10" href="#" data-instruction="What patient demographic shows the most improvement based on all survey scores?">
                    <strong>What patient demographic shows the most improvement</strong> based on all survey scores?
                </a> 
                <a class="p-5 rounded-lg bg-dark/5 hover:bg-dark/10" href="#" data-instruction="Can you tell me about TMS research for alcohol addiction?">
                    <strong>Can you tell me about TMS research</strong> for alcohol addiction?
                </a> 
            </div>
        </div>

        <div class="sticky bottom-0 max-w-screen-md pb-5 -mb-5 bg-light"> 
            <div class="relative">
                <input type="hidden" id="user-id" name="user_id" value="">
                <input type="hidden" id="chat-name" value="">
                <input type="hidden" id="chat-avatar" value="">
                <textarea id="chat-message" class="w-full block resize-none h-[58px] scrollbar-none-force pl-5 py-4 pr-10 border rounded-lg outline-none border-dark/30 focus:border-dark/60" placeholder="Enter your message"></textarea>
                <button id="send-message" class="absolute bottom-0 right-0 px-4 py-[14px] opacity-30 hover:opacity-100"  type="submit"><SendHorizontal class="w-7 h-7"/></button>
            </div>
            <p class="mt-4 text-sm text-left opacity-60"><strong>Disclaimer:</strong> The information provided by ChatTMS is for general informational purposes only and is not intended as medical advice. AI is still an experimental technology and is often incorrect. <a class="underline" href="/disclaimer">Read full disclaimer</a>.</p>
        </div>
    </div>

</div>
