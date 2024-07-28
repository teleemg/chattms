import { SvelteKitAuth } from '@auth/sveltekit';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './db/schema';
import GitHub from '@auth/sveltekit/providers/github';
import Postmark from '@auth/sveltekit/providers/postmark';
import { EMAIL_FROM_NOREPLY } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
	trustHost: true,
	adapter: DrizzleAdapter(db),
	providers: [
		GitHub,
		Postmark({
			from: EMAIL_FROM_NOREPLY
		})
	]
});
