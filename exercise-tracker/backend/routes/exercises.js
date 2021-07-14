 const router = require('express').Router()
 const Exercise = require('../models/user.model')

 router.route('/').get((req, res) => {
     Exercise.find()
     .then((exercise) => res.json(exercise))
     .catch(err => res.status(400).json('Error:'+ err))
 })
// post request - create- read - update- delete
 router.route("/add").post((req, res) => {
   const username = req.body.username;
   const description = req.body.description;
   const duration = Number(req.body.duration)
   const date = Date.parse(req.body.date); 

   const newExercise = new Exercise ({ username, description, duration, date})
   newExercise.save()
   .then(() => res.json('New Exercise Added!'))
   .catch(err => res.status(400).json('Error:'+ err))
 })

 module.exports = router; 