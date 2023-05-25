import express from 'express'
import routes from '../router/'

const PORT = 3000

export const createServer = () => {
  const app = express()

  app.use('/', routes)

  return {
    start: () => app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  }
}

