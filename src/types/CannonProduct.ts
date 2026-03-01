export type CannonProduct = "sabanas" | "plumones" | "otros"

export interface TextileSpecs {
  threadCount?: number
  composition: string
}

export interface HomeTextileProduct {
  id: number
  brand: "Cannon"
  category: CannonProduct
  collection: string
  model: string
  specs: TextileSpecs
  features: string[]
  image?: string
}