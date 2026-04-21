export const getManualsById = async (id: number) => {
  const res = await fetch(`/api/manuals/${id}`, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('No manuals found')
  }

  return res.json()
}

export const getAllManuals = async () => {
  const res = await fetch(`/api/manuals`, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('No manuals found')
  }

  return res.json()
}
