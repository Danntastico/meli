import React from 'react'
import { ProductDetailsCard } from '../containers/ProductDetailsCard'
import { Breadcrumb } from '../components/Breadcrumb'

export const ProductDetails = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item> Electrónica, Audio y Video </Breadcrumb.Item>
        <Breadcrumb.Item> iPod </Breadcrumb.Item>
        <Breadcrumb.Item> Reproductores </Breadcrumb.Item>
        <Breadcrumb.Item> iPod touch </Breadcrumb.Item>
        <Breadcrumb.Item isActive> 32GB </Breadcrumb.Item>
      </Breadcrumb>
      <ProductDetailsCard
        description='Lorem'
        imageUrl='https://cdn.vox-cdn.com/thumbor/mFiywP9BUHDC8AIRBDYJvXdfQiA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23265504/Spider_Man_meme.jpg'
        name='Deco Reverse Sombrero Oxford'
        price={'$1990'}
        productStatus='nuevo'
        soldAmount={234}
      />
    </>
  )
}
