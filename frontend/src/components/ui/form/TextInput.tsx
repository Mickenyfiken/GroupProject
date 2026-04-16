import { Input } from '@headlessui/react'
import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import Field from './Field'

type TTextInputProps = {
  label?: string
  description?: string
  error?: string
  fieldClassName?: string
  inputClassName?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  label,
  description,
  fieldClassName,
  inputClassName,
  error,
  ...rest
}: TTextInputProps) => {
  return (
    <Field
      label={label}
      description={description}
      error={error}
      className={clsx('fieldClassName', fieldClassName)}
    >
      <Input
        className={clsx(
          'mt-3 block w-full bg-surface-subtle px-4 py-3',
          'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-border-default border border-default',
          inputClassName
        )}
        {...rest}
      />
    </Field>
  )
}

export default TextInput
