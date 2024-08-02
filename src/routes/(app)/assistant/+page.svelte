<script lang="ts">
	import * as config from '$src/config';
</script>

<svelte:head>
    <title>Assistant - {config.siteName}</title>
</svelte:head>

<div class="flex items-center">
    <div class="">
        <span class="">Chat history</span>
    </div>
    <div class="ml-auto">
        <span class="">New chat</span>
    </div>

</div>

<div class="flex flex-col items-center justify-center grow">
    <!-- <div class="flex items-center gap-4 ml-auto">
        <a href="/surveys/new-survey" class="btn">Open assistant</a>
        <a href="/surveys/new-survey" class="btn btn-primary">New survey</a>
    </div> -->

    

    <div class="flex flex-col h-full gap-5 pt-5 -mt-5 overflow-y-auto text-left gow xl:-mt-8 xl:pt-8 max-w-[800px]" id="chat-box">
        <div class="flex flex-col">
            <img src="/images/logo-icon.svg" class="w-[50px] mx-auto mb-5" alt="ChatTMS">
            <p class="text-2xl font-bold text-center">How can we help you today?</p>
        </div>
        <div class="hidden grid-cols-1 gap-3 mb-3 text-sm md:grid md:grid-cols-2">
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

    <div class="sticky bottom-0 pb-5 -mb-5 bg-light"> 
        <div class="relative">
            <input type="hidden" id="user-id" name="user_id" value="<?php echo get_current_user_ID(); ?>">
            <input type="hidden" id="chat-name" value="<?php echo $name; ?>">
            <input type="hidden" id="chat-avatar" value="<?php echo $avatar_url; ?>">
            <textarea class="w-full block resize-none h-[58px] scrollbar-none-force pl-5 py-4 pr-10 border rounded-lg shadow-sm outline-none border-dark/20 focus:border-dark/40 shadow-dark/10" id="chat-message" placeholder="Message CloudNeuro AI"></textarea>
            <!-- <button class="absolute right-0 px-4 py-3 text-2xl -translate-y-1/2 fa-regular fa-sharp fa-paper-plane-top opacity-30 hover:opacity-100 top-1/2" id="send-message" type="submit"></button> -->
            <button class="absolute bottom-0 right-0 px-4 py-2 text-2xl fa-regular fa-sharp fa-paper-plane-top opacity-30 hover:opacity-100" id="send-message" type="submit"></button>
            <!-- <button class="absolute right-0 hidden px-4 py-3 text-2xl -translate-y-1/2 fa-regular fa-sharp fa-circle-stop opacity-30 hover:opacity-100 top-1/2" id="stop-chat" type="submit"></button> -->
        </div>
        <p class="mt-3 text-xs text-left opacity-60"><strong>Disclaimer:</strong> The information provided by CloudNeuro AI is for general informational purposes only and is not intended as medical advice. AI is still an experimental technology and is often incorrect. <a class="underline" href="#ai-disclaimer">Read full disclaimer</a>.</p>
    </div>
</div>