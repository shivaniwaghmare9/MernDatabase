
const express=require("express");
const app=express();
const userRoute=require("./routes/userRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
require("dotenv").config();
const cors=require("cors")
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("Database Successfully Connected")
})

//Bodyparser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(cors());
app.use("/user",userRoute)


const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server is running on port :${port}`)
})