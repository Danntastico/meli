import { Router } from 'express'
import { searchItemController } from '../controllers/searchItemController'
const router = Router()

router.get('/search', searchItemController)

export default router
