
import GitHub from '@auth/sveltekit/providers/github';
import Postmark from '@auth/sveltekit/providers/postmark';
import type { Provider } from "@auth/sveltekit/providers"

export const providers: Provider[] = [
    GitHub,
    Postmark
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})