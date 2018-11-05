module.exports = class Donor {
    constructor(donorName, donorId, donorBankAccountNo){
        this.donorName = donorName
        this.donorId = donorId
        this.donorBankAccountNo = donorBankAccountNo
        this.amountOfVotes = 0
    }

    static create(donorName, donorId, donorBankAccountNo, amountOfVotes){
        const donor = new Donor(donorName, donorId, donorBankAccountNo)
        donor.amountOfVotes = amountOfVotes
        return donor
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