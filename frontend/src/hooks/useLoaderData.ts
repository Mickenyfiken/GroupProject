import { useRouteLoaderData } from 'react-router'
import type { TCurrentUser } from '../types/userTypes'

export const useAppLoaderData = () =>
  useRouteLoaderData('root') as {
    currentUser: TCurrentUser
  }
