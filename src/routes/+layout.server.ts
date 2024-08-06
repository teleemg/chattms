import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { session }, cookies }) => {
  return {
    session,
    cookies: cookies.getAll(),
  }
}

// import type { LayoutServerLoad } from './$types';

// // "Managing the session" - https://authjs.dev/reference/sveltekit
// export const load: LayoutServerLoad = async (event) => {
//     return {
//         session: await event.locals.auth()
//     };
// };