
import { SvelteKitAuth } from '@auth/sveltekit';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '$src/db/schema';
import { EMAIL_FROM_NOREPLY } from '$env/static/private';
import { providers } from '$lib/auth/authProviders';

export const { handle, signIn, signOut } = SvelteKitAuth({
    trustHost: true,
    adapter: DrizzleAdapter(db),
    providers: providers.map(provider => 
        provider.id === 'postmark' 
            ? provider({ from: EMAIL_FROM_NOREPLY })
            : provider
    ),
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out",
    },
});