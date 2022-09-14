import { getLink } from '../../lib/api';

export async function get({ params }) {
  const link = await getLink(params.id);

  return Response.redirect(link, 307);
}
