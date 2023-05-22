
import React from 'react'
import { Icon } from './Icon';
import "/src/styles/components/search-result-item.scss"

interface SearchResultItemProps {
  isShipped: boolean;
  location: string;
  name: string;
  price: string | number;
  imageUrl: string;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = (props) => {
  const { isShipped, location, name, price, imageUrl } = props

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={`Product ${name}`} className="product-image" />
      <div className="product-description">
        <div className='product-price'>
          <h3>{price}</h3>
          { isShipped && <Icon name='shipping' width='20px' />}
        </div>
        <p>{name}</p>
      </div>
      <p className='product-location'>{location}</p>
    </div>
  )
}
