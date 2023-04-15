import  express  from "express";
import { MongoClient} from "mongodb";
import mentor from "./routes/mentor.js";
import student from "./routes/student.js";
import * as dotenv from 'dotenv';



dotenv.config();



const app = express();

const PORT=process.env.PORT;

//middleware
app.use(express.json());




const  MONGO_URL=process.env.MONGO_URL
 
 
 

async function creatConnection() {
  // Use connect method to connect to the server
  const client = new MongoClient(MONGO_URL);

  await client.connect();
  console.log('Mongo is connected successfully to server');
  return client;
}
 export const client= await creatConnection();


app.get('/', (req, res)=> {
  res.send('Hello World TAMILAARASAN');
})


app.use('/student', student)
app.use('/mentor', mentor)


app.listen(PORT, ()=>console.log("server connect successfully", PORT));