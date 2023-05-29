interface Author {
  name: string;
  lastname: string;
}

interface Category {
  id: string;
  name: string;
  path_from_root: string[]
}

interface Item {
  category: Category;
  condition: string;
  description: string;
  free_shipping: boolean;
  id: string;
  location: string
  picture: string;
  price: Price;
  sold_quantity: number;
  title: string;
}

interface Price {
  amount: number;
  currency: string;
  decimals: number;
}

export interface GetItemsBySearchQueryResponse {
  avaible_category_filter: string[];
  author: Author;
  categories: string[];
  items: Omit<Item, 'sold_quantity' | 'description' | 'category'>[];
}

export interface GetItemByIDResponse {
  author: Author,
  item: Omit<Item, 'location'>;
}
