import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactRoutes from './routes/contact.js'
import resumeRoutes from './routes/resume.js'
import { getEmailStatus } from './utils/email.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio'

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true)
      } else {
        callback(null, true)
      }
    },
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Routes
app.use('/api/contact', contactRoutes)
app.use('/api/resume', resumeRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState
  const dbStatus = {
    0: 'Disconnected',
    1: 'Connected',
    2: 'Connecting',
    3: 'Disconnecting',
  }[dbState] || 'Unknown'

  res.status(200).json({
    status: 'ok',
    message: 'Portfolio Backend Server is healthy and operational.',
    database: dbStatus,
    email: getEmailStatus(),
    timestamp: new Date().toISOString(),
  })
})

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found.`,
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err)
  res.status(500).json({
    success: false,
    error: 'Internal server error occurred.',
  })
})

// Start server immediately so endpoints are available
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://localhost:${PORT})`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
  console.log(`Resume route: http://localhost:${PORT}/api/resume/pdf`)
})

// Connect to MongoDB asynchronously with connection timeout
mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 4000,
  })
  .then(() => {
    console.log(`Connected to MongoDB Atlas successfully: ${mongoose.connection.host}`)
  })
  .catch((dbError) => {
    console.warn(`[MongoDB Notice] Could not connect to ${MONGODB_URI}: ${dbError.message}`)
    console.warn('[MongoDB Notice] To store contact form messages, start local MongoDB or provide MONGODB_URI in .env.')
  })

// Keep-alive self-ping interval for Render free tier (every 14 minutes in production)
if (process.env.NODE_ENV === 'production') {
  const KEEP_ALIVE_URL = 'https://portfolio-api-devam.onrender.com/api/health'
  setInterval(() => {
    fetch(KEEP_ALIVE_URL)
      .then((res) => console.log(`[Keep-Alive] Pinged ${KEEP_ALIVE_URL} - Status: ${res.status}`))
      .catch((err) => console.warn(`[Keep-Alive] Ping notice:`, err.message))
  }, 14 * 60 * 1000)
}

export default app
