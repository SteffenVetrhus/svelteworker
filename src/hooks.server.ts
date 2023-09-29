import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set('cache-control', 'no-cache');
  return response;
}) satisfies Handle;