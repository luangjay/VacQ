const express = require('express')
const dotenv = require('dotenv')
const connectdb = require('./config/db')

// Route files
const hospitals = require('./routes/hospitals.js')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectdb()

const app = express()

// Body parser
app.use(express.json())

app.get('/', (req, res) => {
  //1. res.send('<h1>Hello from express</h1>')
  //2. res.send({ name: 'Brad' })
  //3. res.json({ name: 'Brad' })
  //4. res.sendStatus(400)
  //5. res.status(400).json({ success: false })
  res.status(200).json({
    success: true,
    data: { id: 1 },
  })
})

// Mount routers
app.use('/api/v1/hospitals', hospitals)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log('Server running in', process.env.NODE_ENV, 'mode on port', PORT)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  // Close server & exit process
  server.close(() => process.exit(1))
})
