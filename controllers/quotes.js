const express = require('express')

const router = express.Router()

const Quote = require('../models/quotes.js')

router.get('/',(req, res)=>{
    Quote.find((err, allQuotes)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index.ejs',{
                quotes: allQuotes
            })
        }
    })
})



router.get('/new',(req,res)=>{
    res.render('new.ejs')
})

router.post('/',(req,res)=>{
    Quote.create(req.body, (err, quoteCreated)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/quotes')
        }
    })
})


router.get('/:id', (req,res)=>{
    Quote.findById(req.params.id,(err, foundQuote)=>{
        if(err){
            console.log(err)
        } else {
            res.render('show.ejs', {
                quote:foundQuote
            })
        }
    })
})






























module.exports = router