import type { Publication } from '../types'

export function formatBibTeX(pub: Publication): string {
  const key = pub.id
  const authors = pub.authors.join(' and ')
  const entryType = pub.type === 'journal' ? 'article' : pub.type === 'preprint' ? 'misc' : 'inproceedings'
  const doiClean = pub.doi ? pub.doi.replace('https://doi.org/', '') : ''

  const lines: string[] = [
    `@${entryType}{${key},`,
    `  author    = {${authors}},`,
    `  title     = {${pub.title}},`,
    pub.type === 'journal' ? `  journal   = {${pub.venue}},` : `  booktitle = {${pub.venue}},`,
    `  year      = {${pub.year}},`,
  ]

  if (doiClean) lines.push(`  doi       = {${doiClean}},`)
  if (pub.pdfUrl && !pub.doi) lines.push(`  url       = {${pub.pdfUrl}},`)

  lines.push('}')
  return lines.join('\n')
}
