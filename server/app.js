import express from 'express';
import "dotenv/config";
import routes from './routes/routes';
import cors from 'cors';
require("./models/db").default;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.get('/', (req, res)=>{
  res.send({message: 'welcome phone'})
})

app.use('/api', routes);


app.listen(PORT, () => console.log(`application running on port ${PORT}`));
