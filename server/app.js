import express from 'express';
import "dotenv/config";
import routes from './routes/routes';

const app = express();
const port = process.env.PORT;
require("./models/db").default;

app.get('/', (req, res)=>{
  res.send({message: 'welcome phone'})
})

app.use('/api', routes);


app.listen(port, () => console.log(`application running on port ${port}`));
