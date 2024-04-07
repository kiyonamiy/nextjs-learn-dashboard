import localFont from 'next/font/local';
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const montserrat = localFont({
  src: [
    {
      path: './Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-montserrat',
});

export const poppins = localFont({
  src: [
    {
      path: './Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-poppins',
});

export const luckiestGuy = localFont({
  src: './LuckiestGuy-Regular.ttf',
  display: 'swap',
  variable: '--font-luckiest-guy',
});

export const montserratTmp = localFont({
  src: './Montserrat-Regular.ttf',
  display: 'swap',
  variable: '--font-montserrat-tmp',
});
