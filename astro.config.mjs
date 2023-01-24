import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import critters from 'astro-critters'
import compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import Yaml from '@modyfi/vite-plugin-yaml'
import oembed from 'remark-oembed'

export default defineConfig({
  site: 'https://catatan.radenpioneer.blog',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [[oembed, { syncWidget: true }]],
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
    compress({
      img: false,
    }),
    critters(),
  ],
  vite: {
    plugins: [Yaml()],
  },
})
