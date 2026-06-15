const HIGHLIGHTED_NAME = 'Susil Kumar Mohanty'

export function formatAuthors(authors: string[]): React.ReactNode {
  return authors.map((author, i) => (
    <span key={i}>
      {i > 0 && ', '}
      {author === HIGHLIGHTED_NAME ? <strong>{author}</strong> : author}
    </span>
  ))
}
