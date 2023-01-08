import express from 'express'
import { getWard, getWards, addWard, updateWard, deleteWard } from '../controllers/wards.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getWards)
router.get('/:id', verifyToken, getWard)
router.post('/', verifyToken, addWard)
router.put('/:id', verifyToken, updateWard)
router.delete('/:id', verifyToken, deleteWard)

export default router