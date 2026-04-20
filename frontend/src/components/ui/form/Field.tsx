import { Description, Field as HLField, Label } from '@headlessui/react'
import type { ReactNode } from 'react'

type TFieldProps = {
  label?: string
  description?: string
  error?: string
  children: ReactNode
  className?: string
}

const Field = ({ label, description, error, children, className }: TFieldProps) => {
  return (
    <HLField className={className}>
      {label && <Label className="text-white">{label}</Label>}
      {description && <Description className="text-white">{description}</Description>}
      {children}

      {error ? <p className="text-sm text-label-warning">{error}</p> : <div className="mt-6"></div>}
    </HLField>
  )
}

export default Field
