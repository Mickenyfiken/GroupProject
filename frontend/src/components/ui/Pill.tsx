const Pill = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center h-8 px-4 py-2 text-sm uppercase border border-black rounded-full min-w-12 text-label-default font-extralight">
      {text}
    </span>
  )
}

export default Pill
