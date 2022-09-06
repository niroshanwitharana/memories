import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://niro:niro7517@cluster0.6v80kdx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>{app.listen(PORT, ()=>console.log(`server running on Port : ${PORT}`))})
.catch((error)=>console.log(error.message));

// mongoose.set("useFindAndModify", false);
