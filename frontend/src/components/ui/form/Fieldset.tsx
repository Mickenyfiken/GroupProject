import { Field, Fieldset as HlFieldset, Legend } from '@headlessui/react'
import type { ReactNode } from 'react'
import clsx from 'clsx'

type TFieldsetProps = {
  className?: string
  children: ReactNode
  legend: {
    string: string
    srOnly?: boolean
  }
}

const Fieldset = ({
  className,
  children,
  legend: { string, srOnly = false },
}: TFieldsetProps) => {
  return (
    <HlFieldset className={clsx('space-y-6', className)}>
      <Legend className={clsx('text-lg text-white', srOnly && 'sr-only')}>
        {string}
      </Legend>
      <Field>{children}</Field>
    </HlFieldset>
  )
}

export default Fieldset
