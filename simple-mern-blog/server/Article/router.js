const express = require('express')
const router = express.Router()


router.post('/', (request, response) => {
    const Article = require('./article.model.js')

router.post('/', (request, response) => {
  Article.create( request.body, (error, article) => {
    if (error) {
      console.log(`Error creating Article, ${new Date()}: ${error}`)
      response.status(400).json(error)
    }
    else {
      response.status(201).json(article)
    }
  })
})
  })

module.exports = router;