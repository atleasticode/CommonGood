const fs = require('fs')
const Donor = require('../models/donor.js')
const dbPath = `${__dirname}/../database/Donors.json`


async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const donors = JSON.parse(file)
            donors.map(Donor.create)
            resolve(donors)
        })
    })
}

async function saveAll(donors) {
    return new Promise((resolve, reject) => {
      fs.writeFile(dbPath, JSON.stringify(donors), (err) => {
        if (err) return reject(err)
  
        resolve()
      })
    })
  }

async function add(donor) {
    const allDonors = await findAll()
  
    donor = Donor.create(donor)
    alldonors.push(donor)
  
    await saveAll(allDonors)
  
    return donor
}

module.exports = {
    findAll,
    saveAll,
    add
}