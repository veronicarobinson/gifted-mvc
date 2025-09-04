import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";

export class GiftController {
    constructor() {
        AppState.on('identity', this.getGifts)
        AppState.on('gifts', this.drawGifts)
        // giftService.getGifts()
    }

    async getGifts() {
        try {
            await giftService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    drawGifts() {
        const giftElm = document.getElementById('list-gifts')

        if (!giftElm) { return console.error('unable to get giftElem list-gifts') }
        let template = ''
        AppState.gifts.forEach(g => template += g.GiftTemplate)
        giftElm.innerHTML = template



    }




}