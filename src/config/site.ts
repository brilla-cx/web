import { z } from 'zod';

import { SITE_URL } from '#/lib/constants';

const siteUrl = SITE_URL;

const ImageSchema = z.object({
  url: z.string().startsWith('/'),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  alt: z.string().min(1),
});

const SiteConfigSchema = z.object({
  category: z.string().min(1),
  company: z.string().min(1),
  companyUrl: z.string().url(),
  description: z.string().min(1),
  openGraphImage: ImageSchema,
  twitterImage: ImageSchema,
  keywords: z.array(z.string().min(1)).nonempty(),
  name: z.string().min(1),
  url: z.string().url(),
});

type SiteConfig = z.infer<typeof SiteConfigSchema>;

export const siteConfig: SiteConfig = {
  category: 'Digital Marketing Agency',
  company: 'BRIL.LA, LLC.',
  companyUrl: 'https://bril.la',
  description:
    'We are a woman-owned digital marketing agency based in Los Angeles. We help brands achieve better outcomes online via meaningful and sustainable initiatives.',
  openGraphImage: {
    url: `/opengraph-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'An open graph image with the logomark for bril.la in the top left and the text "Digital Marketing Superpowers" across the center of the image.',
  },
  twitterImage: {
    url: `/twitter-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'An open graph image with the logomark for bril.la in the top left and the text "Digital Marketing Superpowers" across the center of the image.',
  },
  keywords: [
    'Growth Marketing as a Subscription',
    'Digital Marketing as a Subscription',
    'Design as a Subscription',
    'Growth Partner as a Subscription',
    'Design Partner as a Subscription',
  ],
  name: 'BRIL.LA',
  url: siteUrl,
};

SiteConfigSchema.parse(siteConfig);

export const validatedSiteConfig = siteConfig;
