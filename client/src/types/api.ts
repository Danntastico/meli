interface Author {
  name: string;
  lastname: string;
}

interface Item {
  condition: string;
  description: string
  free_shipping: boolean;
  id: string;
  picture: string;
  price: Price;
  sold_quantity: number;
  title: string;
  location: string
}

interface Price {
  amount: number;
  currency: string;
  decimals: number;
}

export interface GetItemBySearchQueryResponse {
  author: Author;
  categories: string[];
  items: Omit<Item, 'sold_quantity' | 'description'>[];
}

export interface GetItemByIDResponse {
  author: Author,
  item: Omit<Item, 'location'>;
}
