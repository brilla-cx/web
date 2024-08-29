export const isLocal = process.env.NODE_ENV === 'development';

export const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : '';

export const SITE_URL =
  process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : (process.env.NEXT_PUBLIC_APP_URL ?? VERCEL_URL) || 'http://localhost:3000';

export const BASEHUB_REVALIDATE_TIME = 10;
