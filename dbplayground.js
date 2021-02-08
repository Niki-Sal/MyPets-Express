//access to database

// const db = require('./models')

// db.user.create({
//     firstName: 'Aaron',
//     lastName: 'hernandez',
//     age: 29,
//     email: 'aaron@gmail.com'
// })
// .then(newUser =>{
//     //make a pet associated with this user
//     //create ASSOCIATEDMODELNAME()
//     // newUser.createBook({ title: 'the hobbits}) ....anything
//     newUser.createPet({
//         name: 'Samson',
//         species: 'Dog'
//     })
//     .then (newDog =>{
//         console.log(newDog)
//     })
// })

// db.user.findOne({
//     where: {id: 1}
// })
// .then( user => {
//     //another built in method getTABLEPLURAL()
//     user.getPets()
//     .then(allPets => {
//         console.log(allPets)
//     })
// })