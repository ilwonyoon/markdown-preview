# Markdown Preview

노션처럼 읽기 좋은 마크다운 문서 뷰어. **VitePress** 기반, **Inter + Pretendard** 폰트로 한글·영문 모두 깔끔하게.

데스크탑·모바일 반응형이고, 같은 Wi-Fi의 폰에서 로컬 IP로 바로 열어볼 수 있습니다.

## 빠른 시작 — 새 프로젝트에 끌어다 쓰기

```bash
npx degit ilwonyoon/markdown-preview docs
cd docs
npm install
npm run dev
```

dev server는 자동으로 LAN(`0.0.0.0`)에 노출되고 포트는 `5180`으로 고정됩니다 (Vite 기본 `5173`을 피해 다른 프로젝트와 충돌 방지).

## 모바일에서 열기

같은 Wi-Fi 네트워크에서:

```bash
npm run ip
# 예: 192.168.1.42
```

폰 브라우저에서 `http://192.168.1.42:5180` 접속.

## 문서 추가

`docs/` 폴더에 `.md` 파일을 추가하고, 사이드바에 노출하려면 `docs/.vitepress/config.ts`의 `sidebar` 섹션에 등록합니다.

```
docs/
├── .vitepress/
│   ├── config.ts          # 사이트 메타 + 사이드바
│   └── theme/
│       ├── index.ts
│       └── custom.css     # Inter + Pretendard
├── index.md               # 홈
├── guides/
│   ├── index.md
│   └── markdown-syntax.md
└── notes/
    ├── index.md
    └── sample.md
```

## 디자인 노트

- **폰트**: Inter (영문 본문/UI) + Pretendard Variable (한글). JetBrains Mono → SF Mono fallback (코드).
- **본문 사이즈**: 데스크탑 17px, 모바일 16px. line-height 1.75 (한글 가독성 보정).
- **다크 모드**, **로컬 검색**, **자동 목차** 모두 VitePress 기본 제공.

## 스크립트

| 명령              | 설명                                |
| ----------------- | ----------------------------------- |
| `npm run dev`     | dev server (LAN 노출, 포트 5180)    |
| `npm run build`   | 정적 사이트 빌드                    |
| `npm run preview` | 빌드 결과 미리보기                  |
| `npm run ip`      | 맥 로컬 IP 출력 (모바일 접속용)     |
