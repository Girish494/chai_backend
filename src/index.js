import dotenv from "dotenv"
import connectDB from "./src/db/db.js";  


dotenv.config({path:'DOTENV_KEY./env'})

connectDB().then(()=>{
    app.listen(process.eventNames.PORT || 8000,()=>{
        console.log(`listen on port ${process.env.PORT}`);
        
    } )
}).catch((err)=>{
    console.log("MONGO db connection failed ",err);
    
})