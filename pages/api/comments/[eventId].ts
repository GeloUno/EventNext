import { NextApiRequest, NextApiResponse } from 'next';
import { handlerCommentsGET, handlerCommentsPOST } from './../../../controller/comments/comments';


function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    const eventId: string = req.query?.eventId.toString();

    switch (method) {
        case "GET": handlerCommentsGET(req, res, eventId);
            break;
        case "POST": handlerCommentsPOST(req, res);
            break;

        default:
            break;
    }


}

export default handler