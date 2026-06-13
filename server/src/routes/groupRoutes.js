const express = require("express")
const router = express.Router()

const {createGroup,showMyGroup} = require("./../controllers/groupController")


// post api/auth/groups
router.post("/groups", createGroup)

// GET api/auth/groups/mygroups
router.get("/groups/mygroups", showMyGroup);




module.exports = router;