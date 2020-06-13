import express from 'express';
import "dotenv/config";
import routes from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;
require("./models/db").default;

app.get('/', (req, res)=>{
  res.send({message: 'welcome phone'})
})

app.use('/api', routes);


app.listen(PORT, () => console.log(`application running on port ${PORT}`));
