import express from 'express'
import routes from '../router/'
import cors from 'cors'

const PORT = 3000

export const createServer = () => {
  const app = express()
  app.use(cors())
  app.use('/', routes)

  return {
    start: () => app.listen(PORT, () => {
      console.log(`Server app listening on port ${PORT}`)
    })
  }
}

