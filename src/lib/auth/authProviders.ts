
import GitHub from '@auth/sveltekit/providers/github';
import Postmark from '@auth/sveltekit/providers/postmark';
import type { Provider } from "@auth/sveltekit/providers";
import { PUBLIC_EMAIL_FROM_NOREPLY } from '$env/static/public';

export const providers: Provider[] = [
    GitHub,
    Postmark({
        from: PUBLIC_EMAIL_FROM_NOREPLY
    })
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})