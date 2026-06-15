import { z } from 'zod'

export const PublicationSchema = z.object({
  id: z.string(),
  title: z.string(),
  authors: z.array(z.string()),
  venue: z.string(),
  year: z.number(),
  type: z.enum(['journal', 'conference', 'preprint']),
  featured: z.boolean().optional(),
  doi: z.string().url().optional(),
  pdfUrl: z.string().url().optional(),
  codeUrl: z.string().url().optional(),
  abstract: z.string().optional(),
  metrics: z.string().optional(),
})

export const JourneyItemSchema = z.object({
  id: z.string(),
  type: z.enum(['education', 'experience']),
  title: z.string(),
  institution: z.string(),
  period: z.object({
    start: z.number(),
    end: z.union([z.number(), z.literal('present')]),
  }),
  location: z.string().optional(),
  supervisor: z.string().optional(),
  thesis: z.string().optional(),
  rank: z.string().optional(),
  grant: z.string().optional(),
  description: z.string().optional(),
})

export const ResearchAreaSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export const CourseSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  semester: z.string(),
  year: z.number(),
  active: z.boolean(),
  syllabusUrl: z.string().url().optional(),
  description: z.string().optional(),
  textbooks: z.array(z.string()).optional(),
})

export const SocialLinkSchema = z.object({
  platform: z.enum(['google-scholar', 'researchgate', 'dblp', 'linkedin', 'github']),
  label: z.string(),
  url: z.string().url(),
})

export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  department: z.string(),
  institution: z.string(),
  email: z.string().email(),
  phone: z.string(),
  officeRoom: z.string(),
  address: z.string(),
  researchTagline: z.string(),
  about: z.string(),
  socialLinks: z.array(SocialLinkSchema),
  cvUrl: z.string(),
  photoUrl: z.string(),
})
