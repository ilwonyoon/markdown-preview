---
title: 시작하기
---

# 시작하기

이 사이트는 **마크다운 문서를 노션처럼** 읽기 위한 로컬 뷰어입니다. 모바일과 데스크탑 양쪽에서 잘 보이도록 설계되어 있습니다.

## 빠른 사용법

새 프로젝트에 끌어다 쓰려면:

```bash
npx degit ilwonyoon/markdown-preview docs
cd docs
npm install
npm run dev
```

dev server가 LAN에 노출되어 있어 같은 Wi-Fi의 모바일에서도 바로 볼 수 있습니다.

## 로컬 IP 확인

```bash
npm run ip
# 또는
ipconfig getifaddr en0
```

출력된 IP가 `192.168.1.42`라면 모바일에서 `http://192.168.1.42:5180`으로 접속합니다.

::: tip 즐겨찾기 안정성
포트는 `5180`으로 고정되어 있어 모바일에서 즐겨찾기로 등록해두면 매번 같은 주소로 접속할 수 있습니다. (Vite 기본 5173을 피해 다른 dev server와 충돌하지 않게 잡은 값입니다.)
:::

## 문서 추가

`docs/` 폴더 어디에든 `.md` 파일을 만들면 됩니다. 사이드바는 `.vitepress/config.ts`에서 관리합니다.

```
docs/
├── guides/
│   ├── index.md
│   └── markdown-syntax.md
└── notes/
    ├── index.md
    └── sample.md
```
