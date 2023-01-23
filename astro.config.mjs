import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import critters from 'astro-critters'
import compress from 'astro-compress'
import Yaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
export default defineConfig({
  site: 'https://notes.radenpioneer.blog',
  integrations: [
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    critters(),
    compress({ img: false }),
  ],
  vite: {
    plugins: [Yaml()],
  },
})
