import express from 'express'
import { login, signup } from '../controllers/user.js'

const router= express.Router()

// router.get("/me",)
// router.get("/all",)
router.post("/signup",signup)
router.post("/login",login)
// router.put("/update")
// router.delete("/delete",)

export default router