import express from 'express' ;
import cors from 'cors';
import dotenv from 'dotenv' ;
import bodyParser from 'body-parser';
// Initalizing the express
const app = express() ;

 dotenv.config()

app.use(bodyParser.json({
  limit: "30mb",
  extended: true,
}));

app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true,
}));

app.use(cors());

const PORT = process.env.PORT ;

app.listen(PORT , () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
