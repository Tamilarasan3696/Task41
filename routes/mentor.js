import express from 'express'
const router = express.Router()
import {getMentorDetails,createMentor,updateStudents,getbyParticularMentor,DeleteMentor} from '../services/mentor.service.js'


router.get("/", async function(req,res){
    const result = await getMentorDetails()
    res.send(result)
})

router.get("/:_id", async function(req,res){
    const {_id} = req.params;
    const result = await getbyParticularMentor(_id)
   res.send(result)
})

router.post("/add", async function(req,res){
    const data = req.body;
    const result = await createMentor(data)
    res.send(result)
})

router.put("/update/:_id", async function(req,res){
    const {_id} = req.params;
    const data = req.body;  
    const result = await updateStudents(_id, data)
    res.send(result)
})

router.delete("/delete/:_id", async function (req, res) {
    const { _id } = req.params;
    const result = await DeleteMentor(_id);
     res.send(result) 
  }); 

export default router


