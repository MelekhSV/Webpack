export class Post {
    constructor(title) {
        this.title = title
        this.data = new Date()
    }
    toString() {
        JSON.stringify({
            title: this.title,
            data: this.data.toJSON()
        })
    }

    get uppercaseTitlte() {
        return this.title.toUpperCase()
    }
}