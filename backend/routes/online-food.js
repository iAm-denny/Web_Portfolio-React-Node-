const express = require('express');
const route = express.Router();
const Feedback = require('../modals/feedbacks');

route.get('/' ,  function (req,res) {
//  res.render('customer',{title:'Customer' , customers : res})
    Feedback.find().sort({createdAt: -1})
     .then(result => res.json( result) )
     .catch(err => console.log(err))
    })

route.get('/feedbacks' ,  function (req,res) {
    Feedback.find().sort({createdAt: -1})
        .then(result => res.render('feedback',{title:'Feedback' ,head:'Feedback', feedbacks:result}) )
        .catch(err => console.log(err))
     })

route.post('/' ,(req,res) => {
    const name = req.body.name ;
    const message = req.body.message;
    const feedback = new Feedback({
        name,
        message
    });
    feedback.save()
    .then(result => {
        console.log('Saved to Feedback Database')
        res.json({path:'/Feedback'})
        
    })
    .catch(err => console.log(err))
})
route.delete('/:id',(req,res) => {
    const id = req.params.id
    Feedback.findByIdAndDelete(id)
    .then(result => res.json({redirect:'feedbacks'}))
    .catch(err => console.log(err))
})
module.exports = route