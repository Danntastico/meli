import axios from "axios"
import { Request, Response } from "express"
import { URL_MELI } from "../constants/urls"

export const getItemByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const meliItem = await (await axios.get(`${URL_MELI}/items/${id}`)).data
    const itemDescription = await (await axios.get(`${URL_MELI}/items/${id}/description`)).data
    const categoryRes = await axios.get(`${URL_MELI}/categories/${meliItem.category_id}`)
    console.log(categoryRes.data)
    res.status(200).json({
      author: {
        name: 'Danilo',
        lastname: 'Peña'
      },
      item: {
        category: {
          id: categoryRes.data.id,
          name: categoryRes.data.name,
          path_from_root: categoryRes.data.path_from_root.map((i: any) => i.name)
        },
        condition: meliItem.condition,
        description: itemDescription.plain_text,
        free_shipping: meliItem.shipping.free_shipping,
        id: meliItem.id,
        picture: meliItem.pictures[0].secure_url,
        price: {
          amount: meliItem.price,
          currency: meliItem.currency_id,
          decimals: 0
        },
        sold_quantity: meliItem.sold_quantity,
        title: meliItem.title
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
