import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb'
import { URL_MONGODB } from '../../model/mongoDB/mongoDB';
import { connectClientToMongoDB } from '../mongoDB/mongoDB';
import { CollectionEnum } from '../../model/mongoDB/CollectionEnum';


export function handlerNewsLetterGET(req: NextApiRequest, res: NextApiResponse) {
}

export async function handlerNewsLetterPOST(req: NextApiRequest, res: NextApiResponse) {

    const userEmail = req.body.email;

    // dummy validation
    if (!userEmail || !userEmail.includes('@')) {
        return res.status(422).json({ message: "invalid email address" })
    }
    // every day check access ip mongoDB (whitelist) if you have dynamic ip
    try {
        const { clientMongoDB, colection } = await connectClientToMongoDB(CollectionEnum.NEWSLETTERUSERS);

        const responsMongoDB = await colection.insertOne({ userEmailNewsLetter: userEmail })

        responsMongoDB && clientMongoDB.close()

        return res.status(201).json({ message: 'signed up', user: userEmail })

    } catch (error) {

        return res.status(500).json({ message: `error: ${error.message}`, user: userEmail })
    }
}




