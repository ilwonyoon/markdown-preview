import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Markdown Preview',
  description: 'A local markdown documentation viewer',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  vite: {
    server: {
      host: '0.0.0.0',
      port: 5180,
      strictPort: true,
    },
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Notes', link: '/notes/' },
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting started', link: '/guides/' },
            { text: 'Markdown syntax', link: '/guides/markdown-syntax' },
          ],
        },
      ],
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: 'Index', link: '/notes/' },
            { text: 'Sample note', link: '/notes/sample' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    outline: {
      label: 'On this page',
      level: [2, 3],
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    lastUpdatedText: 'Last updated',
    darkModeSwitchLabel: 'Dark mode',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ilwonyoon/markdown-preview' },
    ],
  },
})
