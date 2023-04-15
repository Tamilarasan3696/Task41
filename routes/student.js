import express from 'express'
const router = express.Router()
import {getStudent,createStudent,updating,ParticularStudent,DeleteStudent} from '../services/student.service.js'


router.get("/", async function(req,res){
    const result = await getStudent()
    res.send(result)
})

router.post("/add", async function(req,res){
    const data = req.body;
    const result = await createStudent(data)
    res.send(result)
})

router.get("/:_id", async function(req,res){
    const {_id} = req.params; 
    const result = await ParticularStudent(_id)
    res.send(result)
})



router.put("/update/:_id", async function(req,res){
    const {_id} = req.params;
    const data = req.body;
    const result = await updating(_id, data)
    res.send(result)
})

router.delete("/delete/:_id", async function (req, res) {
    const { _id } = req.params;
    const result = await DeleteStudent(_id);
     res.send(result) 
  }); 

export default router
