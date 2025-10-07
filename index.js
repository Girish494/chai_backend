// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./src/db/db.js";  

dotenv.config({path:'DOTENV_KEY./env'})

connectDB();

// import express from"express";
// const app=express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listen on port${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("ERROR: ",error);
//         throw err
        
//     }
// })()
