import type { TLoginUser } from '../types/userTypes'

export const login = async (user: TLoginUser) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText)
    }
  } catch (error) {
    console.error('Error login user:', error)
    throw error
  }
}

export const fetchMe = async () => {
  const res = await fetch('/api/authentication/me', {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Not authenticated')
  }

  return res.json()
}

export const logOut = async () => {
  try {
    const result = await fetch('/api/login/logout', {
      method: 'POST',
      credentials: 'include',
    })
    if (!result.ok) {
      const errorText = await result.text()
      throw new Error(errorText)
    }
  } catch (error) {
    console.error('Error login user:', error)
    throw error
  }
}
