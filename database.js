const fs = require('fs')

/*  
Class save data to a JSON file and to load data from this file.
*/

module.exports = {
    save(data){
        fs.writeFileSync('data.json', JSON.stringify(data))
    },
    load(){
        return JSON.parse(fs.readFileSync('data.json'))
    }
}