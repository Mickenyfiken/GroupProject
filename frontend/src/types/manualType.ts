export enum ManualResourceType {
  Video = 0,
  File = 1,
}

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
