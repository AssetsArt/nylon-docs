// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [
            [rehypeMermaid, {
                strategy: 'img-png',
                mermaidConfig: {
                    theme: "dark",
                    look: 'handDrawn',
                    handDrawnSeed: 1
                }
            }]
        ],
    },
    integrations: [
        starlight({
            title: 'Nylon',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AssetsArt/nylon' }],
            sidebar: [
                {
                    label: 'Overview',
                    slug: 'overview',
                },
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Installation', slug: 'getting-started/installation' },
                    ],
                },
                {
                    label: 'Plugin System',
                    items: [
                        { label: 'Overview', slug: 'plugin-system' },
                        { label: 'Native Plugins', slug: 'plugin-system/native' },
                        { label: 'Go SDK', slug: 'plugin-system/go' },
                        // { label: 'Rust SDK', slug: 'plugin-system/rust' },
                        // { label: 'Zig SDK', slug: 'plugin-system/zig' },
                        // { label: 'C SDK', slug: 'plugin-system/c' },
                    ],
                },
            ],
        }),
    ],

    adapter: cloudflare(),
});