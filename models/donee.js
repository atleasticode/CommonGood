const Wish = require('./wish.js')

module.exports = class Donee {
    constructor(doneeName, doneeId){
        this.doneeName = doneeName
        this.doneeId = doneeId
        this.wishes = []
    }

    static create(doneeName, doneeId, wishes){
        const donee = new Donee(doneeName, doneeId)
        donee.wishes = wishes.map(Wish.create)
        return donee
    }
    
    createWish(wishName, wishExpense, bucket){
        let doneeWish = new Wish(this.doneeName, wishName, wishExpense)
        this.wishes.push(doneeWish)
        bucket.wishList.push(doneeWish)
    }
}