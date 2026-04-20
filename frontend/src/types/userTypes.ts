export type TUser = {
  id: string
  username: string
  email: string
  createdAt: Date
  roles: []
  isDeactivated: boolean
}

export type TLoginUser = {
  email: string
  password: string
}

export type TCurrentUser = TUser | null
