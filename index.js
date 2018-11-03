const Bucket = require('./bucket.js')
const Donor = require('./donor.js')
const Donee = require('./donee.js')
const Wish = require('./wish.js')

//Create a new bucket
const education = new Bucket("Education", 500)

//Create donees and wishes
const donee1 = new Donee("Li Jin")
donee1.createWish("100 Pencils", 100, education)
const donee2 = new Donee("Jenna Hansen")
donee2.createWish("New Mouse Pads", 200, education)
const donee3 = new Donee("Dirk Rudolph")
donee3.createWish("English Books", 200, education)

education.rankWishes()

//Create donors and their votes
const donor1 = new Donor("Edvard Lund", 5434322221)
donor1.donateMoney(education, 200)
donor1.voteForWish(donee1.wishes[0], 2)

const donor2 = new Donor("Alyssa Hagen", 5434322221)
donor2.donateMoney(education, 100)
donor2.voteForWish(donee1.wishes[0], 1)

const donor3 = new Donor("Okeke Mbiti", 5434322221)
donor3.donateMoney(education, 300)
donor3.voteForWish(donee1.wishes[0], 3)


console.log(education)