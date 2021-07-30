import { Collection, Document, Db, MongoClient } from 'mongodb';
import { URL_MONGODB } from '../../model/mongoDB/mongoDB';
import { CollectionEnum } from '../../model/mongoDB/CollectionEnum';

export async function connectClientToMongoDB(collection: CollectionEnum): Promise<{ clientMongoDB: MongoClient, db: Db, colection: Collection<Document> }> {

    try {
        const clientMongoDB = await MongoClient.connect(URL_MONGODB)
        const db = await clientMongoDB.db()
        const colection = await db.collection(collection)

        return { clientMongoDB, db, colection }

    } catch (error) {
        throw error
    }
}