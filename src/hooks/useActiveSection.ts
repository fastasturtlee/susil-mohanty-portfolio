import { useLocation } from 'react-router-dom'

export function useActiveSection(): string {
  return useLocation().pathname
}
