import { client } from '../index.js'
import { ObjectId } from 'bson';


export async function getStudent() {
    return await client.db("bw41").collection("student").find({}).toArray()
}



export async function updating(_id, data) {
    return await client
        .db("bw41")
        .collection("student")
        .updateOne({ _id: ObjectId(_id) }, { $set: data })
}

export async function createStudent(data) {
    return await client.db("bw41").collection("student").insertMany(data)
}



export async function ParticularStudent(_id) {
    return await client.db("bw41").collection("student").find({ _id: ObjectId(_id) }).toArray()
}

export async function DeleteStudent(_id) {
    return await client.db("bw41").collection("student").deleteOne({ _id: ObjectId(_id) })
}