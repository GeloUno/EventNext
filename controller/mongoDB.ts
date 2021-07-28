import { Collection, Document, Db, MongoClient } from 'mongodb';
import { URL_MONGODB } from '../model/mongodb';

export async function conectClientToMongoDB(collection: string): Promise<{ clientMongoDB: MongoClient, db: Db, colection: Collection<Document> }> {

    try {
        const clientMongoDB = await MongoClient.connect(URL_MONGODB)
        const db = clientMongoDB.db()
        const colection = db.collection(`${collection}`)

        return { clientMongoDB, db, colection }

    } catch (error) {
        throw error.code
    }
}