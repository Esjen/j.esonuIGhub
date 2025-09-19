import mongoose from "mongoose";

const uri = "mongodb+srv://enyinnayaesonu_db_user:BRu1rsxGiNZLSOaq@elearningcluster.ravcrti.mongodb.net/?retryWrites=true&w=majority&appName=ElearningCluster";

mongoose.connect(uri)
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Connection error:", err));
