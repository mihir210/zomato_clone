import mongoose from "mongoose";

export default  async () =>{
    return mongoose.connect(MONGO_URI);
}