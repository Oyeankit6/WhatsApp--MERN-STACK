import express from "express";

import Connection  from "./Database/Db.js"
import Route from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;


Connection();

app.get('/',(req,res)=>{
         res.send("Hello server");

})

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",Route)



app.listen(PORT, ()=>{
    console.log(`Server is runing at port http://localhost:${PORT} `)
});
