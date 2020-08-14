const express = require('express');
const route = express.Router();
const Customer = require('../modals/customer');

route.get('/' ,  function (req,res) {
//  res.render('customer',{title:'Customer' , customers : res})
    Customer.find().sort({createdAt: -1})
        .then(result => res.render('customer',{title:"Customer",head:"Customer" , customers : result}))
        .catch(err => console.log(err))
    })
route.post('/' ,(req,res) => {
    const name = req.body.name ;
    const phone = req.body.phone;
    const email = req.body.email ;
    const address = req.body.address ;
    const url = req.body.url
    const customer = new Customer({
        name,
        email,
        phone,
        address
    });
    customer.save()
    .then(result => {
        console.log('Saved to Customer Database')
        res.json({path:'/Form',success:'Successfully bought! We will contact as soon as possbile:) Thank you'})
    })
    .catch(err => {
        console.log(err)
        res.json({path:'/Form',error:'Something went Wrong'})
    })
})
route.delete('/:id',(req,res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
    .then(result => res.json({redirect:'customers'}))
    .catch(err => console.log(err))
})
module.exports = route