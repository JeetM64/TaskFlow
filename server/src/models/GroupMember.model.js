const mongoose = require("mongoose")



const GroupMember = mongoose.Schema({
    user:{
        type : String,
        required:true,
    },
    group:{
        type:String,
        required:true,
        ref:Group
    },
    joinedAt:{
        type:Date,
        default:Date.now(),
        required:true
    }

})

const GroupMemeber = mongoose.model("GroupMember",GroupMember)

module.exports={
    GroupMemeber
}