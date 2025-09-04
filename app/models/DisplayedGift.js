import { Gift } from "./Gift.js";


export class DisplayedGift extends Gift {
    constructor(data) {
        super(data);
        this.opened = data.opened;
        this.creatorId = data.creatorId;
        this.profileIdsOpened = data.profileIdsOpened;

    }
}
