const mongooser = require("mongoose")
const User = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const crypto = reuire("crypto")
const config = require("../config/config.js")



const registerUser = async (req,res)=>{

    const { username,email,password} = req.body

    const isAlreadyRegistered = await User.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })

    if(isAlreadyRegistered){
        return res.status(409).json({
            message:"user already exists"
        })
    }

    // the pass is tored in the form of hash so we use crypto 
    const hashpassword = crypto.createHash("sha256").update(password).digest("hex")
    // user create kela
    const user = await User.create({
        username,
        email,
        password : hashpassword
    })

    const token = jwt.sign({
        userId : user.id,
    },config.JWT_SECRET,{
        expiresIn : "7d"
    })

    res.status(201).json({
        message: "user registered successfully",
        username: username,
        email: email,
        token: token
    })

}

const userLogin = async (req,res)=>{

    const {email,password} = req.body;

    const isUserinDb = await User.findOne({
        email : email,
        password : crypto.createHash("sha256").update(password).digest("hex")        
    })

    if(!isUserinDb){
        return res.status(401).json({
            message : "Invalid email or password"
        })
    }

    // create session
    const token = jwt.sign({
        userId :isUserinDb.id
    },config.JWT_SECRET,{
        expiresIn : "7d"
    })


    res.status(200).json({
        message : "Login successful",
        token : token
    })
}

const getCurrentUser = async(req,res)=>{
    const userId = req.user.userId

    const user = await User.findById(userId).select("-password")

    if(!user){
        return res.status(404).json({
            message : "User not found"
        })
    }

    res.status(200).json({
        message : "Current user",
        user : user
    })
}

module.exports = {
    registerUser,
    userLogin,
    getCurrentUser
}

