import { NextApiResponse, NextApiRequest } from 'next';
import { IComment, INewComment } from '../../model/comments/IComment';
import { CollectionEnum } from '../../model/mongoDB/CollectionEnum';
import { connectClientToMongoDB } from '../mongoDB/mongoDB';

export async function handlerCommentsGET(req: NextApiRequest, res: NextApiResponse, eventId: string) {

    const { clientMongoDB, colection } = await connectClientToMongoDB(CollectionEnum.EVENTSCOMMENTS)
    const dataCommentsEvents: Array<IComment> = await colection.find({ eventId }).sort({ _id: -1 }).toArray()

    return res.status(200).json([...dataCommentsEvents])
}



export async function handlerCommentsPOST(req: NextApiRequest, res: NextApiResponse) {

    const data: INewComment = JSON.parse(req.body);

    const { email, name, text, eventId } = data

    // dummy validation
    if (!email || !email.includes('@') || !name || name.trim() === "" || !text || text.trim() === '') {
        return res.status(422).json({ message: 'no valid data' })
    }
    const newComment: INewComment = {
        email,
        name,
        text,
        eventId
    }
    try {

        const { clientMongoDB, colection } = await connectClientToMongoDB(CollectionEnum.EVENTSCOMMENTS)

        const responsMongoDb = await colection.insertOne(newComment)

        responsMongoDb && clientMongoDB.close()

        return res.status(201).json({ message: 'Create comment', comment: newComment })

    } catch (error) {
        throw res.status(422).json({ message: error.message })
    }
}