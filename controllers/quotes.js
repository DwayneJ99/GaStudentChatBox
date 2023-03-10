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

router.get('/:id/edit' , (req, res)=>{
    Quote.findById(req.params.id, (err, foundQuote)=>{
        if(err){
            console.log(err)
        } else {
            res.render('edit.ejs',{
            quote: foundQuote
        })
    }
        
        
    })
})

router.put('/:id', (req, res)=>{
    Quote.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedQuote)=>{
        if(err){
            console.log(err)
        } else {
            
            res.redirect('/quotes')
        }
        
    })
})




router.delete('/:id',(req,res)=>{
    
 Quote.findByIdAndDelete(req.params.id, (err,removeQuote)=>{
        if(err){
            console.log(err)
        } else {

            res.redirect('/quotes')
        }
        
    })
})






module.exports = router