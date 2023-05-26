
import React from 'react'
import { Icon } from 'src/components/Icon';
import "/src/styles/components/search-result-item.scss"
import Currency from 'react-currency-formatter';
import { Link } from 'react-router-dom';

interface SearchResultItemProps {
  currency:string;
  id: string;
  imageUrl: string;
  isShipped: boolean;
  location: string;
  name: string;
  price: number;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = (props) => {
  const {
  currency,
  id,
  imageUrl,
  isShipped,
  location,
  name,
  price
} = props

  return (
    <div className='product-card'>
      <Link to={`/items/${id}`}>
        <img src={imageUrl} alt={`Product ${name}`} className="product-image" />
      </Link>
    <div className="product-description">
        <div className='product-price'>
          <h3><Currency quantity={price} currency={currency}/></h3>
          { isShipped && <Icon name='shipping' width='20px' />}
        </div>
        <p>{name}</p>
      </div>
      <div style={{minWidth: '200px'}}>
        <p className='product-location'>{location}</p>
      </div>
    </div>
  )
}
