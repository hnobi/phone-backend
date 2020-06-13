import express from 'express';
import "dotenv/config";

const app = express();
const port = process.env.PORT;
require("./models/db").default;

app.get('/', (req, res)=>{
  res.send({message: 'welcome phone'})
})

app.listen(port, () => console.log(`application running on port ${port}`));
