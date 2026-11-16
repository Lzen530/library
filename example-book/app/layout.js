import './globals.css';

export const metadata = {
  title: '나의 책장 | example-book',
  description: '다 읽은 책과 읽고 싶은 책을 모아 둔 나만의 작은 책장입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
