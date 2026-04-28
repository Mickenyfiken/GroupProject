import { apiClient } from '../helpers/apiClient'
import type { TLoginUser } from '../types/userTypes'

export const login = (user: TLoginUser) => {
  return apiClient('/auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
  })
}

export const fetchMe = () => {
  return apiClient('/auth/me', {
    method: 'GET',
  })
}

export const logOut = () => {
  return apiClient('/auth/logout', {
    method: 'POST',
  })
}

export const refreshAccessToken = () => {
  return apiClient('/auth/refresh-jwt', {
    method: 'POST',
  })
}
