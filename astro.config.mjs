// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Nylon',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AssetsArt/nylon' }],
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [
                      { label: 'Installation', slug: 'getting-started/installation' },
                  ],
              },
          ],
      }),
	],

  adapter: cloudflare(),
});