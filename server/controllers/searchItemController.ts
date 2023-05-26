import { Request, Response } from 'express'
import axios from 'axios'
import { URL_MELI } from '../constants/urls'

export const searchItemController = async (req: Request, res: Response) => {
  try {
    const query = req.query.q
    const meliResponse = await axios.get(`${URL_MELI}/sites/MLA/search?q=${query}`)

    res.status(200).json({
      author: {
        "name": "Danilo",
        "lastName": "Peña"
      },
      categories: [...new Set(meliResponse.data.results.map((result: any) => result.category_id))],
      items: meliResponse.data.results.map((result: any) => ({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: 0
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      }))
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}