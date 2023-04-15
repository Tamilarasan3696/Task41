import { client } from '../index.js'
import { ObjectId } from 'bson';



export async function getMentorDetails() {
    return await client.db("bw41").collection("mentor").find({}).toArray()
}

export async function getbyParticularMentor(_id) {
    return await client.db("bw41").collection("mentor").find({ _id: ObjectId(_id) }).toArray()
}


export async function createMentor(data) {
    return await client.db("bw41").collection("mentor").insertMany(data)
}


export async function updateStudents(_id, data) {
    return await client
        .db("bw41")
        .collection("mentor")
        .updateOne({ _id: ObjectId(_id) }, { $set: data })
}






export async function DeleteMentor(_id) {
    return await client
        .db("bw41")
        .collection("mentor")
        .deleteOne({ _id: ObjectId(_id) })
}


