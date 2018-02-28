var router = require('express').Router()
var Watchlists = require('../models/watchlist')
//Watchlists

router.get('/api/Watchlists', (req, res, next) => {
    Watchlists.find(req.query)
        .then(Watchlists => {
            res.send(Watchlists)
        })
        .catch(next)
})

router.post('/api/Watchlists', (req, res, next) => {
    Watchlists.create(req.body)
        .then(Watchlist => {
            res.send(Watchlist)
        })
        .catch(next)
})

router.get('/api/Watchlists/:id', (req, res, next) => {
  Watchlists.findById(req.params.id)
      .then(Watchlist => {
          if (!Watchlist){
              return res.status(400).send({error: "Invalid Id"})
          }
          return res.send(Watchlist)
      })
      .catch(next)
})

router.put('/api/Watchlists/:id', (req, res, next) => {
    Watchlists.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(Watchlist => {
            res.send(Watchlist)
        })
        .catch(next)
})

router.delete('/api/Watchlists/:id', (req, res, next) => {
    Watchlists.findByIdAndRemove(req.params.id)
        .then(Watchlist => {
            res.send({message: "Watchlist go Burn"})
        })
        .catch(next)
})

module.exports = router