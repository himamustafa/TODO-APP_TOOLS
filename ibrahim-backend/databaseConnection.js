import mongoose from "mongoose";
const DataBaseconnection = async() => {

  var dburl=mongoose.connect('mongodb://abcd:1234@'+process.env.IP+':27017/dbexample?directConnection=true&serverSelectionTimeoutMS=2000')
    //const dburl = "mongodb://"+process.env.IP+":27017/example"
    //await mongoose.connect(
        //var dburl='mongodb://abcd:1234@'+process.env.IP+':27017/dbexample?directConnection=true&serverSelectionTimeoutMS=2000'
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