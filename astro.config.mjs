import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import critters from 'astro-critters'
import compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import Yaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
  site: 'https://catatan.radenpioneer.blog',
  integrations: [
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    critters(),
    compress({
      img: false,
    }),
    sitemap(),
  ],
  vite: {
    plugins: [Yaml()],
  },
})
