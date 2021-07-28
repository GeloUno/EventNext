import { NextApiRequest, NextApiResponse } from 'next';
import { handlerCommentsGET, handlerCommentsPOST } from './../../../controller/comments/comments';


function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    // const eventId = req.query;

    switch (method) {
        case "GET": handlerCommentsGET(req, res);
            break;
        case "POST": handlerCommentsPOST(req, res);
            break;

        default:
            break;
    }


}

export default handler