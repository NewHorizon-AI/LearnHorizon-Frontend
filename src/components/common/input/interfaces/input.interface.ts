import { type LucideIcon } from 'lucide-react'

export interface PrincipalInputProps {
  ariaDescribedBy?: string
  value?: number | string
  placeholder?: string
  className?: string
  ariaLabel?: string
  Icon?: LucideIcon
  type?: string
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
