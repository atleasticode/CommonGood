module.exports = class Donor {
    constructor(donorName, donorBankAccountNo){
        this.donorName = donorName
        this.donorBankAccountNo = donorBankAccountNo
        this.amountOfVotes = 0
    }
    donateMoney(bucket, amount){
        bucket.bucketTotal += amount
        this.amountOfVotes += amount
        bucket.checkBucket()
    }
    voteForWish(wish, votes){
        if(this.amountOfVotes <= votes){
            console.log("You do not have enough votes.")
        } else {
            wish.votes += votes
        }
    }
}