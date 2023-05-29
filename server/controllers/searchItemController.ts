import axios from 'axios'
import { Request, Response } from 'express'
import { URL_MELI } from '../constants/urls'

const getCategoryName = async (categoryIds: string | string[]) => {
  let categories: string[] = []

  const getCategoryNameById = async (id: string) => {
    const response = await axios.get(`${URL_MELI}/categories/${id}`)
    return response.data.name
  }

  if (Array.isArray(categoryIds)) {
    const promises = categoryIds.map((id) => getCategoryNameById(id))
    categories = await Promise.all(promises)
  } else {
    const categoryName = await getCategoryNameById(categoryIds as string)
    categories.push(categoryName)
  }

  return categories
}

export const searchItemController = async (req: Request, res: Response) => {
  try {
    const query = req.query.q
    const { data } = await axios.get(`${URL_MELI}/sites/MLA/search?q=${query}`)

    const availableCategoryFilter = data.available_filters.find((filter: any) => filter.id === 'category')
    const availableCategoryNames = availableCategoryFilter &&
      availableCategoryFilter.values.sort((a: any, b: any) => b.results - a.results).map((i: any) => i.name)

    const categoriesIds = [...new Set(data.results.map((result: any) => result.category_id))]

    const categoriesNames = await getCategoryName(categoriesIds as string[])

    res.status(200).json({
      author: {
        "name": "Danilo",
        "lastName": "Peña"
      },
      categories: categoriesNames,
      avaible_category_filter: availableCategoryNames,
      items: data.results.map((result: any) => ({
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        id: result.id,
        location: result.seller_address.country.name,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: 0
        },
        picture: result.thumbnail,
        title: result.title,
      }))
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}