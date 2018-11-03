module.exports = class Bucket {
    constructor(bucketName, bucketLimit){
        this.bucketName = bucketName
        this.bucketTotal = 0
        this.bucketLimit = bucketLimit
        this.wishList = []
    }
    //if bucket has reached limit, sort wishList
    checkBucket(){
        if(this.bucketTotal >= this.bucketLimit){
            console.log("Yay! The bucket limit has been reached.")
            let sortedWishList = this.rankWishes()
            this.fillBucket(sortedWishList)
        } else {
            console.log("Bucket is not full yet – more donations are needed.")
        }
    }
    //create a new array sortedWishlist which is sorted by votes for the respective wishes
    rankWishes(){
        let sortedWishList = this.wishList
        sortedWishList.sort(function(a, b){return b.votes - a.votes})
        return sortedWishList 
    }
    //pay wishes from the sorted wishlist with money from the bucket until the bucket is empty
    fillBucket(sortedWishList){
        let bucketAmount = this.bucketTotal
        let paidWishes = []
        for(var i = 0; i < sortedWishList.length; i++){
            bucketAmount -= sortedWishList[i].wishExpense
            paidWishes.push(sortedWishList[i])
            if(bucketAmount == 0){
                console.log("Bucket was emptied.")
                break
            }
        }
        for(var j = 0; j < paidWishes.length; j++){
            console.log(paidWishes[j].doneeName + "'s wish has been paid.")
        }
        this.bucketTotal = bucketAmount
    }
}