# Markdown Preview

노션처럼 읽기 좋은 로컬 마크다운 문서 뷰어. **VitePress** 기반, **Inter + Pretendard** 폰트로 한글·영문 모두 깔끔하게. 데스크탑·모바일 반응형이고, 같은 Wi-Fi의 폰에서 로컬 IP로 바로 열어볼 수 있습니다.

## 새 프로젝트에 끌어다 쓰기

원하는 프로젝트 폴더에서 한 줄:

```bash
npx degit ilwonyoon/markdown-preview docs-viewer && cd docs-viewer && npm install
```

`docs-viewer/`라는 폴더가 생기고, 그 안에 자기 만의 viewer 사본이 만들어집니다.

## 문서 보기

```bash
cd docs-viewer
npm run dev
```

- 데스크탑: <http://localhost:5180>
- 모바일 (같은 Wi-Fi):
  ```bash
  npm run ip      # 맥 로컬 IP 출력 (예: 192.168.1.42)
  ```
  폰 브라우저에서 `http://<출력된-IP>:5180` 접속. 즐겨찾기로 등록해두면 매번 같은 주소로 열립니다.

## 문서 추가

`docs-viewer/docs/` 폴더에 `.md` 파일을 추가하면 됩니다. 사이드바에 노출하려면 `docs-viewer/docs/.vitepress/config.ts`의 `sidebar` 섹션에 한 줄 등록합니다.

```ts
sidebar: {
  '/notes/': [
    {
      text: 'Notes',
      items: [
        { text: '인덱스', link: '/notes/' },
        { text: '새 문서', link: '/notes/new-doc' },  // ← 추가
      ],
    },
  ],
},
```

### 기존 프로젝트 문서 폴더 연결

프로젝트에 이미 `docs/` 폴더가 있다면 심볼릭 링크가 편합니다:

```bash
cd docs-viewer/docs
ln -s ../../docs project-docs
```

그러면 `/project-docs/...` 경로로 viewer에 노출됩니다. (사이드바 등록은 동일하게 config에서)

## 폴더 구조

```
docs-viewer/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 사이트 메타 + 사이드바
│   │   └── theme/
│   │       ├── index.ts
│   │       └── custom.css     # Inter + Pretendard + black theme
│   ├── index.md               # 홈
│   ├── guides/
│   └── notes/
├── package.json
└── README.md
```

## 스크립트

| 명령              | 설명                                |
| ----------------- | ----------------------------------- |
| `npm run dev`     | dev server (LAN 노출, 포트 5180)    |
| `npm run build`   | 정적 사이트 빌드 (배포가 필요할 때) |
| `npm run preview` | 빌드 결과 미리보기                  |
| `npm run ip`      | 맥 로컬 IP 출력 (모바일 접속용)     |

## 디자인

- **폰트**: Inter (영문 본문/UI) + Pretendard Variable (한글), JetBrains Mono → SF Mono fallback (코드)
- **테마**: 흑백 모노톤. 액센트는 모두 검정 (다크 모드는 자동 반전)
- **본문**: 데스크탑 17px / 모바일 16px, line-height 1.75~1.8 (한글 가독성 보정)
- **사이드바**: 300px, 다크 모드 / 로컬 검색 / 자동 목차 기본 제공

## 디자인이 업데이트되면

각 프로젝트 viewer는 독립 사본이라 자동 동기화는 안 됩니다. 업데이트 받고 싶을 때:

```bash
# 가장 단순한 방법: 새로 받고, 본인 docs/만 옮기기
cd 내프로젝트
mv docs-viewer docs-viewer.old
npx degit ilwonyoon/markdown-preview docs-viewer
cp -r docs-viewer.old/docs/notes docs-viewer/docs/    # 본인 문서 복원
cp docs-viewer.old/docs/.vitepress/config.ts docs-viewer/docs/.vitepress/  # 본인 사이드바
cd docs-viewer && npm install
```

---

이 리포 자체에 디자인 변경 / 기능 추가가 필요하면 직접 수정 후 push 하시면 됩니다. `npx degit`은 항상 main 브랜치 최신을 가져옵니다.
