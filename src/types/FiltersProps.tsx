export interface FilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}