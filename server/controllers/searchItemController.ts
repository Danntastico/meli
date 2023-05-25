import { Request, Response } from 'express'
import axios from 'axios'

export const searchItemController = async (_req: Request, res: Response) => {
  try {
    const meliResponse = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=:iphone')

    const response = {
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
    }
    res.status(200).json({
      message: 'Succeed',
      data: response
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}