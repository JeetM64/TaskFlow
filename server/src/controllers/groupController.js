const Group = require("../models/group.model");
const GroupMember = require("../models/GroupMember.model")


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

const joinGroup = async (req,res)=>{
    // main logic for the join group
    const groupid = req.params.groupId;

    const userid = req.user.userId;

    // check in the Group db is the group with id present or not ?

    // 1 check group present or not

    const checkGroupPresent = await Group.findById(groupid)

    if(!checkGroupPresent){
        // if not in the db

        return res.status(404).json({
            message : "group not found"
        })
    }

    // 2 check if is prseent already in group or not 
    const membership = await GroupMember.findOne({
      user: userid,
      group: groupid
    });
 
    if(membership){
         return res.status(400).json({
            message: "Already joined"
        });
    }

    // if not in group
    await GroupMember.create({
        user: userid,
        group: groupid
    })
    
    return res.status(201).json({
        message: "Joined group successfully"
    })
}

const leaveGroup = async (req,res)=>{
    const groupid = req.params.Id;

    const userid = req.user.userId;

    // check if group present or not ? and thin i guess thek if the user prsent or not 

    // 1 check group
    const checkgrouppresent = await Group.findById(groupid)

    if(!checkgrouppresent){
        return res.status(404).json({
            message : "group not present"
        })
    }

    // group is prsent then make the user leave

    // we can cehck in the groupmember schema check for the gorup id

    const ismemeberpresent = await GroupMember.findOne({
        user: userid,
        group: groupid
    })

    if(!ismemeberpresent){
        return res.status(404).json({
            message : "user not in the group"
        })
    }

    // else int the gorup so  we can make the group name of the group schema to null
    // find the user id in group model and if found then make the group as null ?

    await GroupMember.deleteOne({
        user: userid,
        group: groupid
    })
    
    return res.status(200).json({
        message: "Left group successfully"
    })
}


module.exports = {
   createGroup,
   showMyGroup,
   joinGroup,
   leaveGroup
};