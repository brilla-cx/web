import { z } from 'zod';

const SocialConfigSchema = z.object({
  links: z.object({
    twitter: z.string().url(),
  }),
});

type SocialConfig = z.infer<typeof SocialConfigSchema>;

export const socialConfig: SocialConfig = {
  links: {
    twitter: 'https://twitter.com/rebekahradice',
  },
};

SocialConfigSchema.parse(socialConfig);
