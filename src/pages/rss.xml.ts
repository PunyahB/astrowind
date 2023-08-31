import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from '~/utils/config';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }



  

