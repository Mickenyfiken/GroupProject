import clsx from 'clsx'

const Pill = ({ text, size = 'default' }: { text: string; size?: 'default' | 'small' }) => {
  const sizeClasses = {
    default: 'h-8 px-4 py-2 text-sm',
    small: 'h-5 px-3 py-1 text-xs',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center text-sm uppercase border border-black rounded-full min-w-12 text-label-default font-extralight',
        sizeClasses[size],
      )}
    >
      {text}
    </span>
  )
}

export default Pill
