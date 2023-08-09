import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  id: { type: String, require: true },
  username: { type: String, require: true },
  name: { type: String, require: true },
  image: { type: String, require: true },
  bio: { type: String, require: true },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
