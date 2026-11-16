# example-book · 나의 책장

Next.js App Router와 JavaScript로 만든 장르별 책장 및 React 컴포넌트·Props 실습 프로젝트입니다.

## 실행

Node.js 20.9 이상이 필요합니다.

```powershell
cd example-book
npm.cmd install
npm.cmd run dev
```

브라우저에서 http://localhost:3000 을 엽니다. Windows PowerShell의 실행 정책 때문에 `npm` 실행이 막히는 환경에서도 `npm.cmd`를 사용할 수 있습니다.

```powershell
npm.cmd run build
npm.cmd start
```

## 파일 구성

- `data/books.js`: 소설·에세이·IT 분야의 도서 7권 및 별점·완독 여부 데이터
- `app/page.js`: 전체 통계, 완독률, 5점 추천 및 장르별 도서 분류
- `components/GenreSection.js`: 장르 제목과 책 배열을 Props로 받아 `BookCard` 출력, 빈 장르 안내
- `components/BookCard.js`: 도서 제목·저자·별점·완독 상태를 표시하는 카드
- `app/globals.css`: 책장, 통계, 카드 및 모바일 반응형 스타일
- `app/layout.js`: 공통 레이아웃과 한국어 문서 설정

## 데이터와 표시 규칙

각 도서 데이터는 `id`, `title`, `author`, `genre`, `rating`, `isRead`, `isBest`를 가집니다. `rating`은 0~5점이고 `isRead`가 `false`인 책은 “읽는 중”으로 표시됩니다. `isBest`가 `true`인 책에는 BEST 배지를 표시하고 추천 문구에 함께 나열합니다. 별점은 `const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);`으로 만듭니다.

`page.js`는 도서 전체 수, 완독 수, 완독률을 데이터에서 계산합니다. 장르별 책은 `genre`를 기준으로 분류하며 책이 없는 장르에는 “아직 등록된 책이 없습니다.”를 표시합니다.

현재 예시 데이터는 총 7권, 완독 4권이며 완독률은 57%입니다. 시 장르는 아직 등록된 책이 없어 빈 상태 안내가 표시됩니다.
