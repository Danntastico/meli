import React from 'react'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { getItemByID } from 'src/api'
import { Breadcrumb } from 'src/components/Breadcrumb'
import { ProductDetailsCard } from 'src/containers/ProductDetailsCard'
import { useFetch } from 'src/hooks/useFetch'
import { GetItemByIDResponse } from 'src/types/api'
import { FetchFn } from 'src/types/helpers'

export const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const { data , loading } = useFetch<GetItemByIDResponse>(getItemByID as FetchFn, id)
  const categories = data?.item.category.path_from_root ?? [data?.item.category.name]

  if(loading) {
    return  <>
      <PacmanLoader color='#FFE600' style={{top: '50%', left: '50%', position: 'absolute'}}/>
    </>
  }
  
  return (
    <>
      <Breadcrumb>
        {categories?.map((category, ix) => (
          <Breadcrumb.Item key={category} isActive={ix === categories.length - 1}>{category as string}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      { data && (
        <ProductDetailsCard
          description={data.item.description}
          imageUrl={data.item.picture}
          name={data.item.title}
          price={data.item.price.amount}
          productStatus={data.item.condition}
          soldQuantity={data.item.sold_quantity}
          currency={data.item.price.currency}
        />
      )}
    </>
  )
}
