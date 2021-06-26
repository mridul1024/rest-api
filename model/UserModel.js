//User Schema
const UserShema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: Integer,
    required: true,
  },
  fullName: {
    type: String,
  },
  apiKey: {
    type: String,
    required: true,
  },
});

//Export UserModel Schema
module.exports = mongoose.model("UserShema", UserShema);
