import express from 'express'
import { getDoctor, getDoctors, addDoctor, updateDoctor, deleteDoctor } from '../controllers/doctors.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getDoctors)
router.get('/:id', verifyToken, getDoctor)
router.post('/', verifyToken, addDoctor)
router.put('/:id', verifyToken, updateDoctor)
router.delete('/:id', verifyToken, deleteDoctor)

export default router