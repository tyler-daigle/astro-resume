import { z, defineCollection } from 'astro:content';

const resumeSummary = defineCollection({
  type: "content",
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    emailAddress: z.string(),
    phoneNumber: z.string().optional(),
    githubLink: z.string().optional(),
    siteLink: z.string(),
    skills: z.array(z.string())
  })
});

const resumeProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    liveLink: z.string().optional(),
    githubLink: z.string().optional()
  })
})

export const collections = {
  "summary": resumeSummary,
  "projects": resumeProjects
};