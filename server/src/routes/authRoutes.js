const express = require("express")
const router = express.Router()
const authMiddleWare = require("../middleware/authMiddleware.js")


const {registerUser,userLogin,getCurrentUser} = require("../controllers/authController.js")
const authMiddleware = require("../middleware/authMiddleware.js")


// POST api/auth/register
router.post("/register",registerUser)

// POST api/auth/login
router.post("/login",userLogin)

// GET api/auth/me
router.get("/me",authMiddleware,getCurrentUser);


module.exports = router;