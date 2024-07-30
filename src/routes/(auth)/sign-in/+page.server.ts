import { signIn } from "$lib/auth/auth"
import type { Actions } from "./$types"
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async (event) => {
    const session = await event.locals.auth();
    if (!session?.user){
        return {};
    } else {
        throw redirect(303, '/dashboard');
    }
    
};

export const actions = { default: signIn } satisfies Actions


