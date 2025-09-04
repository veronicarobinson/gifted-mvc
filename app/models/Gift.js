export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url

    }

    get GiftTemplate() {
        return `
        <div class="card-body">
            <img class="img-card" src="${this.url}">
            <span>pop up click button to unbox</span>
            <p>${this.tag}</p>

        </div>
        `
    }



}



