const express = require('express')

const app = express()

// MIDDLEWARE

// Passing data through body
app.use(express.json())

// ROUTES

module.exports = app