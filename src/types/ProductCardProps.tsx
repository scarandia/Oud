import type { Product } from './Product';

export interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}
