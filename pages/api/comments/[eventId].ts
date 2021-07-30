import { NextApiRequest, NextApiResponse } from 'next';
import { handlerCommentsGET, handlerCommentsPOST } from './../../../controller/comments/comments';


async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    const eventId: string = req.query?.eventId.toString();

    switch (method) {
        case "GET": await handlerCommentsGET(req, res, eventId);
            break;
        case "POST": await handlerCommentsPOST(req, res);
            break;

        default:
            break;
    }
}

export default handler