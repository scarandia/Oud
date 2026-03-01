export type ProductType = "designer" | "arabic"| "nicho"

type Category =
  | "fresh"
  | "gourmand"
  | "oriental"
  | "woody"
  | "floral"
  | "sweet"
  | "spicy"

type Gender = "Hombre" | "Mujer" | "Unisex"

interface SizeOption {
  size_ml: number
  prices: number[]
}

export interface Product {
  id: number
  brand: string
  name: string
  type: ProductType
  category: Category
  concentration: string
  sizes: SizeOption[]
  gender: Gender
  notes: string[]
  image?: string
  description?: string
}
