import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Starter monorepo',
  description: 'Starter monorepo solution',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nandordudas/starter-monorepo' },
    ],
    footer: {
      copyright: 'Copyright © 2023 Nándor Dudás',
      message: 'Released under the MIT License',
    },
  },
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/getting-started/' },
      ],
    },
  ]
}
