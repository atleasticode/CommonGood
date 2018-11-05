module.exports = class Wish {
    constructor(doneeName, wishName, wishExpense){
        this.doneeName = doneeName
        this.wishName = wishName
        this.wishExpense = wishExpense
        this.votes = 0
    }
    
    static create(doneeName, wishName, wishExpense, votes){
        const wish = new Wish(doneeName, wishName, wishExpense)
        wish.votes = votes
        return wish
    }
}