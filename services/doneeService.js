const fs = require('fs')
const Donee = require('../models/donee.js')
const dbPath = `${__dirname}/../database/Donees.json`


async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const donees = JSON.parse(file)
            donees.map(Donee.create)
            resolve(donees)
        })
    })
}

async function saveAll(donees) {
    return new Promise((resolve, reject) => {
      fs.writeFile(dbPath, JSON.stringify(donees), (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
}

async function add(donee) {
    const allDonees = await findAll()
    donee = Donee.create(donee)
    allDonees.push(donee)
    await saveAll(allDonees)
    return donee
}

module.exports = {
    findAll,
    saveAll,
    add
}