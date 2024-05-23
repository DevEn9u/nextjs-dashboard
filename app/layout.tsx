import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';

// 최상위 레이아웃, body 태그 역할, 루트 레이아웃이라고 칭함
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
