export const filterBySearch = <T extends { id: number; title?: string }>(
  item: T,
  search: string,
  pdfTextMap?: Map<number, string>,
): boolean => {
  const q = search?.toLowerCase() || ''
  const titleMatch = item.title?.toLowerCase().includes(q) || false
  const pdfMatch = pdfTextMap?.get(item.id)?.toLowerCase().includes(q) || false
  return titleMatch || pdfMatch
}

export const filterByType = <T extends { resources: { type: number }[] }>(
  item: T,
  filteredType: number | null,
): boolean => {
  return filteredType === null || item.resources.some((r) => r.type === filteredType)
}
