const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/ecommerceRoute")
require ('dotenv').config()
const cors = require('cors')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connected to mongodb`))
.catch((err)=>console.log(err))

app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>console.log(`listening on: ${PORT}`))