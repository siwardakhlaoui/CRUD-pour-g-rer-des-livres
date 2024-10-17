const express=require('express')
const route=express.Router()
const bookcontroller=require('../controllers/book.controller')


// Route pour ajouter un livre (POST)
route.post('/add',bookcontroller.AddBooks)

route.get('/',bookcontroller.Getallbooks)

route.get('/:id',bookcontroller.GetBookById )

route.put('/:id',bookcontroller.UpdateBook)

route.delete('/DeleteBook/:id',bookcontroller.DeleteBook)

module.exports=route;
