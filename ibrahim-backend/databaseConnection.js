import mongoose from "mongoose";
const DataBaseconnection = async() => {

    const dburl = "mongodb://"+process.env.IP+":27017/example"
    await mongoose.connect(
        dburl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected to database.");

};
export default DataBaseconnection;