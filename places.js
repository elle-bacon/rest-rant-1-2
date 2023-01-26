const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.get('*', (req, res) => {
  res.render('error404')
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
      res.render('places/new', { message })
    }
    else {
        res.render('error404')
    }
  })
})

router.post('/:id/comment', (req, res) => {

  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  if (!req.body.pic) {
    
      req.body.pic = 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVubnklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80/'
  }
  if (!req.body.city) {
      req.body.city = 'Anytown'
  }
  if (!req.body.state) {
      req.body.state = 'USA'
  }

  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
  .then(updatedPlace => {
    res.redirect(`/places/${req.params.id}`) 
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id) 
    .then(place => { 
      res.status(303).redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = router

