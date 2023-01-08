import express from 'express'
import {getPatient, getPatients, addPatient, updatePatient, deletePatient } from '../controllers/patients.js'
import {verifyToken} from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getPatients)
router.get('/:id', verifyToken, getPatient)
router.post('/', verifyToken, addPatient)
router.put('/:id', verifyToken, updatePatient)
router.delete('/:id', verifyToken, deletePatient)

export default router