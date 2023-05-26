import { API_URL } from "../models/constants/common"
import { GetItemBySearchQueryResponse } from "../types/api"

const getItemsBySearchQuery = async (query: string): Promise<GetItemBySearchQueryResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/items?q=${query}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getItemsBySearchQuery