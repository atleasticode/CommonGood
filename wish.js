module.exports = class Wish {
    constructor(doneeName, wishName, wishExpense){
        this.doneeName = doneeName
        this.wishName = wishName
        this.wishExpense = wishExpense
        this.votes = 0
    }
}