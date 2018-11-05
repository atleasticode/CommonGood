const fs = require('fs')
const dbPath = `${__dirname}/../database/Buckets.json`

async function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(data), (err) => {
          if (err) return reject(err)
          resolve()
        })
    })
}


async function read(dbPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
                const buckets = JSON.parse(file)
            resolve(buckets)
        })
    })
}

module.exports = {
    save,
    read
}