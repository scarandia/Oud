import type { Product } from "./Product";

export interface ProductPageProps {
  product: Product;
  onClose: () => void;
}
