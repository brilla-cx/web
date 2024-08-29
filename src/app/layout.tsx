import { Footer } from '#/ui/footer';
import { Header } from '#/ui/header';
import { SlashBlobs } from '#/ui/slash-blobs';
import { VerticalLines } from '#/ui/vertical-lines';

import '#/app/style.css';

import type { Metadata, Viewport } from 'next';

import { Inter, Inter_Tight } from 'next/font/google';

import { siteConfig } from '#/config/site';
import { socialConfig } from '#/config/social';
import { SITE_URL } from '#/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const inter_tight = Inter_Tight({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_ENV === 'production' ? siteConfig.url : SITE_URL),
  title: {
    template: `%s :: ${siteConfig.name}`,
    default: `${siteConfig.name} :: Digital Marketing Superpowers`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  category: siteConfig.category,
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [
      {
        url: siteConfig.openGraphImage.url,
        width: siteConfig.openGraphImage.width,
        height: siteConfig.openGraphImage.height,
        alt: siteConfig.openGraphImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: socialConfig.links.twitter,
    creator: socialConfig.links.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.twitterImage.url,
        width: siteConfig.twitterImage.width,
        height: siteConfig.twitterImage.height,
        alt: siteConfig.twitterImage.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} bg-zinc-950 font-inter tracking-tight text-zinc-200 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <VerticalLines />
          <SlashBlobs />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
