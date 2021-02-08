const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')
//control our routes
router.get('/', (req, res)=> {
  // get all the users
  db.user.findAll()
  .then (allUsers =>{
      res.render('allUsers',{ allUsers })
  })
  //render a page to show all users
})
router.get('/:id', (req, res)=> {
    // this will be a show page for a user
    db.user.findOne({ 
      where: {
        id: req.params.id
      },
      include: [db.pet]
    })
    .then( user=> {
      // we will get back a pets property
      console.log(user.pets)
      res.render('userShow', { user })
    })
    // we will show all the animals
    // we will a have a form to make a new animal
  })




// export the router to have access to it
module.exports = router

// route is a lighter version of app