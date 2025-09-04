import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "../utils/Axios.js"

class GiftService {
    async getGifts() {
        const response = await api.get('api/gifts')

        console.log(response.data)
        AppState.gifts = response.data.map(g => new Gift(g))
    }
}

export const giftService = new GiftService()