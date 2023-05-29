
import React from 'react'
import { Icon } from 'src/components/Icon';
import "/src/styles/components/search-result-item.scss"
import { Link, useNavigate } from 'react-router-dom';
import { currencyFormatter } from 'src/functions';

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
  const navigate = useNavigate()
  const handleClickNavigate = () => {
    navigate(`/items/${id}`)
  }

  return (
    <div className='product-card'>
      <div onClick={handleClickNavigate} className='product-cart-image-wrapper'>
        <img src={imageUrl} alt={`Product ${name}`} className="product-image" />
      </div>
    <div className="product-description">
        <Link to={`/items/${id}`} title={name}>
          <div className='product-price'>
            <h3>{currencyFormatter(price, currency)}</h3>
            { isShipped && <Icon name='shipping' width='20px' />}
          </div>
        </Link>
        <p>{name}</p>
      </div>
      <div style={{minWidth: '200px'}}>
        <p className='product-location'>{location}</p>
      </div>
    </div>
  )
}
