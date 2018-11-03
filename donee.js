const Wish = require('./wish.js')

module.exports = class Donee {
    constructor(doneeName){
        this.doneeName = doneeName
        this.wishes = []
    }
    createWish(wishName, wishExpense, bucket){
        let doneeWish = new Wish(this.doneeName, wishName, wishExpense)
        this.wishes.push(doneeWish)
        bucket.wishList.push(doneeWish)
    }
}