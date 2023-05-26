import axios from "axios"
import { Request, Response } from "express"
import { URL_MELI } from "../constants/urls"

export const getItemByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const meliItem = await (await axios.get(`${URL_MELI}/items/${id}`)).data
    const itemDescription = await (await axios.get(`${URL_MELI}/items/${id}/description`)).data
    console.log(meliItem)
    res.status(200).json({
      author: {
        name: 'Danilo',
        lastname: 'Peña'
      },
      item: {
        id: meliItem.id,
        title: meliItem.title,
        price: {
          currency: meliItem.currency_id,
          amount: meliItem.price,
          decimals: 0,
        },
        picture: meliItem.pictures[0].secure_url,
        condition: meliItem.condition,
        free_shipping: meliItem.shipping.free_shipping,
        sold_quantity: meliItem.sold_quantity,
        description: itemDescription.plain_text
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
