import React from "react"
import { Button } from "../components/Button";
import '/src/styles/containers/product-details-card.scss';

interface ProductDetailsCardProps {
  imageUrl: string;
  name: string;
  productStatus: "nuevo" | "usado";
  price: string | number;
  description: string;
  soldAmount: number;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = (
  {
    description,
    imageUrl, 
    name,
    price, 
    productStatus,
    soldAmount,
  }
) => {
  const soldAmountLabel = soldAmount > 9 ? 'vendidos' : 'vendido'

  return (
    <div className="details-container">
      <section className="details-main">
        <img src={imageUrl} alt="Modelo del producto" />
        <div className="details-description">
          <h3>Descripción del producto</h3>
          <p>The scrape di Blanco Italian footwear collection was found by Bill White in 2009, DI blanco Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur voluptas natus, assumenda adipisci molestiae dolores eveniet nam, quidem fuga tempore repudiandae eius blanditiis laborum culpa consequuntur nisi qui vel deserunt!</p>
        </div>
      </section>
      <section className="details-action">
        <span>{productStatus} - {soldAmount} {soldAmountLabel}</span>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <Button label="Comprar producto">Comprar</Button>
      </section>
    </div>
  )
}
