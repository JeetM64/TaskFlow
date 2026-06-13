const Group = require("../models/group.model");


const createGroup = async (req,res) => {
    const { name , description } = req.body
    const owner = req.user.userId

    // for person can make it for mvp

    // const isAlready = await Group.findOne({
    //     $or : [
    //         {name : name},
    //         {description : description}
    //     ]
    // })

    // if(isAlready){
    //     return res.json({
    //         message : "group already present"
    //     })
    // }

    const newgroup =await Group.create({
        name,
        description,
        owner
    })


    res.status(201).json({
        message : "group created",
        name : name,
        description : description        
    })
};

const showMyGroup = async (req,res) => {

    const owner = req.user.userId

    const findOwner = await Group.find({
        owner : owner
    })

    if(findOwner.length == 0){
        return res.status(200).json({
            message : []
        })
    }

    return res.status(200).json({
        message : "group found",
        findOwner
    })

}




module.exports = {
   createGroup,
   showMyGroup
};