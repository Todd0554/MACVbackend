import express from 'express'
import {authUser, authAdmin} from '../middleware/authMiddleware.js'
import {
    getCourses
} from '../controller/courseController.js'

const router = express.Router()

router.route('/').get(getCourses).post(authUser, authAdmin, createCourse)