import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Markdown Preview',
  description: '로컬 호스트 마크다운 문서 뷰어',
  lang: 'ko-KR',
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
      { text: '홈', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Notes', link: '/notes/' },
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: '시작하기', link: '/guides/' },
            { text: '마크다운 문법', link: '/guides/markdown-syntax' },
          ],
        },
      ],
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: '인덱스', link: '/notes/' },
            { text: '샘플 노트', link: '/notes/sample' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            displayDetails: '더 보기',
            resetButtonTitle: '검색 초기화',
            backButtonTitle: '뒤로',
            noResultsText: '결과 없음',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기',
            },
          },
        },
      },
    },

    outline: {
      label: '목차',
      level: [2, 3],
    },

    docFooter: {
      prev: '이전',
      next: '다음',
    },

    lastUpdatedText: '마지막 업데이트',
    darkModeSwitchLabel: '다크 모드',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ilwonyoon/markdown-preview' },
    ],
  },
})
