import cors from 'cors'
import express from 'express'
import portfinder from 'portfinder'
import routes from '../router/'

const PORT = 3000
portfinder.basePort = PORT
portfinder.highestPort = 4000

export const createServer = () => {
  const app = express()
  app.use(cors())
  app.use('/', routes)

  return {
    start: () => portfinder.getPort((err, port) => {
      if (err) throw err;
      app.listen(port, () => {
        console.log(`Server app listening on port ${port}`)
      })
    })
  }
}

