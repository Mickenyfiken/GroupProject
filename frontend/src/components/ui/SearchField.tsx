type SearchFieldProps = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const SearchField = ({ placeholder = 'Sök...', value, onChange }: SearchFieldProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

export default SearchField
