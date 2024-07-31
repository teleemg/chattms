export { handle } from '$lib/auth/auth';

// import { redirect, type Handle } from '@sveltejs/kit';
// import { handle as authenticationHandle } from '$lib/auth/auth';
// import { sequence } from '@sveltejs/kit/hooks';
 
// const protectedPaths = ['/dashboard', '/assistant', '/surveys', '/account', '/admin'];

// async function authorizationHandle({ event, resolve }) {
  
//     if (protectedPaths.some(path => event.url.pathname.startsWith(path))) {
//         const session = await event.locals.auth();
//         if (!session) {
//           throw redirect(303, '/sign-in');
//         }
//       }
 
//   return resolve(event);
// }
 
// // First handle authentication, then authorization
// // Each function acts as a middleware, receiving the request handle
// // And returning a handle which gets passed to the next function
// export const handle: Handle = sequence(authenticationHandle, authorizationHandle)