import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (response.status === 404 && event.url.pathname !== '/') {
    return Response.redirect(new URL('/', event.url), 307);
  }

  return response;
};
