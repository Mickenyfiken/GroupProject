export const filterBySearch = <T extends { title?: string }>(item: T, search: string): boolean => {
  return item.title?.toLowerCase().includes(search?.toLowerCase() || '') || false
}

export const filterByType = <T extends { resources: { type: number }[] }>(
  item: T,
  filteredType: number | null,
): boolean => {
  return filteredType === null || item.resources.some((r) => r.type === filteredType)
}
