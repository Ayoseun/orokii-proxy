const express = require('express')
const app = express()
const cors = require("cors");

const apiRoutes = require('./routers')

// Middleware to parse JSON request body
app.use(express.json({ limit: '10mb' }));

app.use(cors({
    origin: 'http://127.0.0.1:4600',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }));
// Use the routes
app.use('/api', apiRoutes)

// Start the server
const port = 5800 // Specify the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
