import { apiClient } from '../helpers/apiClient'
import type { TLoginUser } from '../types/userTypes'

export const login = (user: TLoginUser) => {
  return apiClient('/login', {
    method: 'POST',
    body: JSON.stringify(user),
  })
}

export const fetchMe = () => {
  return apiClient('/authentication/me', {
    method: 'GET',
  })
}

export const logOut = () => {
  return apiClient('/logout', {
    method: 'POST',
  })
}

export const refreshAccessToken = () => {
  return apiClient('/refresh-jwt', {
    method: 'POST',
  })
}
