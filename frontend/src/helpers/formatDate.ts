export const formatDate = (date: Date) => {
  const formatted = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

  return formatted
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s(\d{4})$/, ', $1')
}
