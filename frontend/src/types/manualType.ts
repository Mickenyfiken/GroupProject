export const ManualResourceType = {
  Video: 0 as const,
  File: 1 as const,
}

export type ManualResourceType = (typeof ManualResourceType)[keyof typeof ManualResourceType]

export type ManualResource = {
  id: number
  manualId: number
  url: string | null
  type: ManualResourceType
  title: string
}

export type BaseManual = {
  id: number
  title: string
  description?: string
  resources: ManualResource[]
}
