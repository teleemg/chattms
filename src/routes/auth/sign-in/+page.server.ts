// import { redirect } from '@sveltejs/kit';

// export const actions = {
//     default: async ({locals, url}) => {
//         const { data } = await locals.supabase.auth.signInWithOAuth({
//             provider: "github",
//             options: {
//               redirectTo: 'http://localhost:5173',
//             },
//           })
          
//           if (data.url) {
//             redirect(307, url.origin + "auth/callback") // use the redirect API for your server framework
//           }

//           return {
//             success: false,
//           }
//     }
// }



// import { signIn } from "$lib/auth/auth"
// import type { Actions } from "./$types"
// import { redirect } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';


// export const load: PageServerLoad = async (event) => {
//     const session = await event.locals.auth();
//     if (!session?.user){
//         return {};
//     } else {
//         throw redirect(303, '/dashboard');
//     }
    
// };

// export const actions = { default: signIn } satisfies Actions


