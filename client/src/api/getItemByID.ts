import { API_URL } from "../models/constants/common";
import { GetItemByIDResponse } from "../types/api";

const getItemByID = async (id: string): Promise<GetItemByIDResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/items/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getItemByID