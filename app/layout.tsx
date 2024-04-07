import '@/app/ui/global.css';
import {
  inter,
  montserrat,
  luckiestGuy,
  montserratTmp,
  poppins,
} from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserratTmp.variable} ${montserrat.variable} ${luckiestGuy.variable} ${poppins.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
