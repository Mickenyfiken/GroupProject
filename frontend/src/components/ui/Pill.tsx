const Pill = ({ text, size = 'default' }: { text: string; size?: 'default' | 'small' }) => {
  const sizeClasses = {
    default: 'h-8 px-4 py-2 text-sm',
    small: 'h-5 px-3 py-1 text-xs',
  }

  return (
    <span
      className={`inline-flex items-center ${sizeClasses[size]} text-sm uppercase border border-black rounded-full min-w-12 text-label-default font-extralight`}
    >
      {text}
    </span>
  )
}

export default Pill
