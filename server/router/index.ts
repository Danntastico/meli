import { Request, Response, Router } from 'express'
import { searchItemController } from '../controllers/searchItemController'
import { getItemByIdController } from '../controllers/getItemByIdController'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hi there!')
})

router.get('/api/items/:id', getItemByIdController)

router.get('/api/items', searchItemController)

export default router
