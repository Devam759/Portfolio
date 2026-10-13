import express from 'express'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filesDirectory = path.join(__dirname, '..', 'files')

// Helper function to serve the requested resume file
const serveFile = (res, format) => {
  const normalizedFormat = format.toLowerCase().trim()
  const isPdf = normalizedFormat === 'pdf'
  const isDocx = normalizedFormat === 'docx' || normalizedFormat === 'word'

  if (!isPdf && !isDocx) {
    return res.status(400).json({
      success: false,
      error: 'Invalid format requested. Supported formats are: pdf, docx',
    })
  }

  const fileName = isPdf ? 'Devam_Gupta_Resume.pdf' : 'Devam_Gupta_Resume.docx'
  const filePath = path.join(filesDirectory, fileName)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      error: `Resume file (${fileName}) not found on server. Please upload it to /server/files/.`,
    })
  }

  const contentType = isPdf
    ? 'application/pdf'
    : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

  res.setHeader('Content-Type', contentType)
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`)

  return res.sendFile(filePath)
}

// GET /api/resume/pdf
router.get('/pdf', (req, res) => {
  return serveFile(res, 'pdf')
})

// GET /api/resume/docx
router.get('/docx', (req, res) => {
  return serveFile(res, 'docx')
})

// GET /api/resume?format=pdf|docx
router.get('/', (req, res) => {
  const format = req.query.format || 'pdf'
  return serveFile(res, format)
})

export default router
