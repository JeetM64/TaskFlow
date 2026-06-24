const express = require("express")
const router = express.Router()
const authMiddleware = require("./../middleware/authMiddleware")

const {createGroup,showMyGroup,joinGroup,leaveGroup} = require("./../controllers/groupController")


// post api/auth/groups
router.post("/groups", createGroup)

// GET api/auth/groups/mygroups
router.get("/groups/mygroups", showMyGroup);

// POST /api/groups/123/join
router.post("/:groupId/join", authMiddleware, joinGroup);

// POST /api/groups/:groupId/leave
router.post("/:groupId/leave", authMiddleware, leaveGroup)

module.exports = router;