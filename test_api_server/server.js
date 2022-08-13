const express = require("express");
const cors = require("cors");
const {PORT,ROUTER} = require("./Constant");
const fs = require("fs");

const database_  = fs.readFileSync("./database.json",'utf-8');
const database = JSON.parse(database_);


const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.set(PORT,8080);

router.get("/api/v1/users",(req,res,next)=>{
    res.json(database.user);
});

router.get("/api/v1/cars",(req,res,next)=>{
    res.json(database.car);
})

app.use(router);

app.listen(app.get(PORT),()=>{
    console.log("server is run ");
})