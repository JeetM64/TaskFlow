// to verify jwt

const express= require("express")
const jwt = require("jsonwebtoken")
const config = require("../config/config.js")


const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization")

    if(!authHeader) {
        return res.status(401).json({
         message: "Authorization header missing"
        });
    }


    const token = req.header("Authorization").split(" ")[1]

    if(!token){
        return res.status(401).json({
            message : "unathorized"
        })
    }

    try{
        const decoded = jwt.verify(token,config.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch(error){
        return res.status(401).json({
            message : "invalid token"
        })
    }
}




module.exports = authMiddleware;