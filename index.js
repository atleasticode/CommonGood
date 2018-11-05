const BucketService = require('./services/bucketService.js')
const DonorService = require('./services/donorService.js')
const DoneeService = require('./services/doneeService.js')


const express = require('express')
const app = express()

// use pug files instead of HTML
app.set('view engine', 'pug')


app.get('/', (_, res) => {
    res.render('index')
})

//donor page
app.get('/donors', async(_, res) => {
    const donors = await DonorService.findAll()
    res.render('donors', { donors })
})

//all donors page
app.get('/donors/all', async(_, res) => {
    const donors = await DonorService.findAll()
    res.render('alldonors', { donors })
  })

//donee page
app.get('/donees', async(_, res) => {
    const donees = (await DoneeService.findAll())
    res.render('donees', { donees })
  })

//all donees page
app.get('/donees/all', async(_, res) => {
    const donees = await DoneeService.findAll()
    res.render('alldonees', { donees })
  })


app.listen(3000, () => {
  console.log('Server listening')
})