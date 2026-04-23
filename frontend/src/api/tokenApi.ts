export const refreshAccessToken = async () => {
  try {
    const result = await fetch('/api/login/refresh-jwt', {
      method: 'POST',
      credentials: 'include',
    })
    if (!result.ok) {
      const errorText = await result.text()
      throw new Error(errorText)
    }
  } catch (error) {
    console.error('Error refresh token:', error)
    throw error
  }
}
