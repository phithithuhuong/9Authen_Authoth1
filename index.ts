import express from "express";
import * as mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./src/router/router"
const app = express();
const DB_URL ='mongodb://127.0.0.1:27017/dbTest';
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.json());
app.use("/api", router);
app.listen(3000, () => {
    console.log("App running on port: 3000 ")
})
