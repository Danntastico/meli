interface Author {
  name: string;
  lastname: string;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface GetItemBySearchQueryResponse {
  author: Author;
  categories: string[];
  items: Omit<Item, 'sold_quantity' | 'description'>[];
}

export interface GetItemByIDResponse {
  author: Author,
  item: Item
}
