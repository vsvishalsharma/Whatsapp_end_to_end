import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT; 
if(PORT){
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
}

else{
    console.log("error");
}
