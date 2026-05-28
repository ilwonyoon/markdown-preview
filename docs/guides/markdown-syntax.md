---
title: 마크다운 문법
---

# 마크다운 문법

뷰어가 지원하는 모든 마크다운 요소의 렌더링 미리보기입니다. 디자인 변경 시 이 페이지로 검증합니다.

## 헤딩 계층

### H3 — 소제목 예시

본문 텍스트는 Inter + Pretendard 조합으로 렌더링됩니다. 영문은 *Inter*, 한글은 **Pretendard Variable**이 자동으로 적용됩니다. 문장이 길어져도 `word-break: keep-all` 설정 덕분에 단어 단위로 줄바꿈됩니다.

#### H4 — 세부 항목

작은 헤딩도 본문과 명확히 구분됩니다.

## 강조와 인라인

이 문장은 **굵게**, *기울임*, ***둘 다***, ~~취소선~~, 그리고 `inline code` 스타일을 보여줍니다. 링크는 [이렇게](https://github.com/ilwonyoon/markdown-preview) 렌더링됩니다.

## 코드 블록

```typescript
interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

function greet(user: User): string {
  return `안녕하세요, ${user.name}님!`
}
```

```python
def fibonacci(n: int) -> list[int]:
    """피보나치 수열 생성"""
    result = [0, 1]
    for _ in range(n - 2):
        result.append(result[-1] + result[-2])
    return result

print(fibonacci(10))
```

## 리스트

순서 없는 리스트:

- 첫 번째 항목
- 두 번째 항목
  - 중첩 항목 A
  - 중첩 항목 B
- 세 번째 항목

순서 있는 리스트:

1. 계획 단계
2. 구현 단계
3. 검증 단계

체크리스트:

- [x] 폴더 셋업
- [x] VitePress 초기화
- [x] 폰트 적용
- [ ] 모바일에서 확인

## 표

| 도구             | 셋업 명령 수 | 모바일 UX | 한글 폰트     |
| ---------------- | ------------ | --------- | ------------- |
| VitePress        | 2            | 우수      | Inter4CJK     |
| Astro Starlight  | 1            | 우수      | system        |
| Docsify          | 1            | 보통      | 직접 설정     |
| MkDocs Material  | 2            | 우수      | system        |

## 인용구와 Callout

> "잘 된 디자인이란, 그 자체로 설명이 필요 없는 것이다."
> — Dieter Rams

::: info 정보
이런 박스는 부가 정보를 강조할 때 사용합니다.
:::

::: tip 팁
짧고 유용한 팁을 전달할 때 좋습니다.
:::

::: warning 주의
주의사항이나 잠재적 이슈를 알릴 때 사용합니다.
:::

::: danger 경고
중요한 경고를 전달할 때 사용합니다.
:::

::: details 펼쳐보기
숨겨진 내용을 클릭으로 펼칠 수 있습니다.

```bash
echo "펼쳐진 내용"
```
:::

## 이미지

이미지는 마크다운 기본 문법으로 삽입합니다:

```markdown
![설명](./images/screenshot.png)
```

## 수평선

위와 아래를 구분할 때:

---

수평선 아래 내용입니다.
