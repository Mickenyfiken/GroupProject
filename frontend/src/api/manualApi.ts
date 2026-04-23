export const getManualsById = async (id: number) => {
  const res = await fetch(`/api/manuals/${id}`, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('No manuals found')
  }

  return res.json()
}

export const getAllManuals = async (limit: number) => {
  const res = await fetch(`/api/manuals?limit=${limit}`, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('No manuals found')
  }

  return res.json()
}
