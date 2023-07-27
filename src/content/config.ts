import { z, defineCollection } from 'astro:content';

const resumeSummary = defineCollection({
  type: 'content',
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    emailAddress: z.string(),
    phoneNumber: z.string(),
    githubLink: z.string(),
    siteLink: z.string(),
    skills: z.array(z.string())
  })
});

export const collections = {
  'summary': resumeSummary,
};