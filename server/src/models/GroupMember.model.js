const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true
    },

    joinedAt: {
      type: Date,
      default: Date.now
    }
  }
);

const GroupMember = mongoose.model(
  "GroupMember",
  groupMemberSchema
);

module.exports = GroupMember;