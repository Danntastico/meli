import React from "react"
import { Button } from "../components/Button";
import '/src/styles/containers/product-details-card.scss';
import { currencyFormatter } from "src/functions";

interface ProductDetailsCardProps {
  currency:string;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  productStatus: string;
  soldQuantity: number;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = (
  {
    currency,
    description,
    imageUrl, 
    name,
    price, 
    productStatus,
    soldQuantity,
  }
) => {
  const soldQuantityLabel = soldQuantity > 1 ? 'vendidos' : 'vendido'

  return (
    <div className="details-container">
      <section className="details-main">
        <img src={imageUrl} alt="Modelo del producto" />
        <div className="details-description">
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </section>
      <section className="details-action">
        <span>{productStatus} - {soldQuantity} {soldQuantityLabel}</span>
        <h1>{name}</h1>
        <h2>
          {currencyFormatter(price, currency)}
        </h2>
        <Button label="Comprar producto">Comprar</Button>
      </section>
    </div>
  )
}
