import React from 'react'
import { ProductDetailsCard } from '../containers/ProductDetailsCard'
import { Breadcrumb } from '../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import { getItemByID } from '../api'
import { useFetch } from '../hooks/useFetch'
import { FetchFn } from '../types/helpers'
import { GetItemByIDResponse } from '../types/api'

export const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const { data , loading } = useFetch<GetItemByIDResponse>(getItemByID as FetchFn, id)
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item> Electrónica, Audio y Video </Breadcrumb.Item>
        <Breadcrumb.Item> iPod </Breadcrumb.Item>
        <Breadcrumb.Item> Reproductores </Breadcrumb.Item>
        <Breadcrumb.Item> iPod touch </Breadcrumb.Item>
        <Breadcrumb.Item isActive> 32GB </Breadcrumb.Item>
      </Breadcrumb>
      { data && (
        <ProductDetailsCard
          description={data.item.description}
          imageUrl={data.item.picture}
          name={data.item.title}
          price={data.item.price.amount}
          productStatus={data.item.condition}
          soldQuantity={data.item.sold_quantity}
        />
      )}
    </>
  )
}
