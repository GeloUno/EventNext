import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb'
import { URL_MONGODB } from '../../model/mongodb';
import { conectClientToMongoDB } from '../mongoDB';


export function handlerNewsLetterGET(req: NextApiRequest, res: NextApiResponse) {
}

export async function handlerNewsLetterPOST(req: NextApiRequest, res: NextApiResponse) {
    const userEmail = req.body.email;

    // dummy validation
    if (!userEmail || !userEmail.includes('@')) {
        return res.status(422).json({ message: "invalid emaiil address" })
    }

    try {
        const { colection } = await conectClientToMongoDB('newsLetterUsers');

        const responsMongoDB = await colection.insertOne({ userEmailNewsLetter: userEmail })

        console.log(`res`, responsMongoDB)
        return res.status(201).json({ message: 'signed up' })

    } catch (error) {
        return res.status(422).json({ message: `error: ${error}` })
    }
}




