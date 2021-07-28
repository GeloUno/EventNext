import { NextApiRequest, NextApiResponse } from "next";
import { handlerNewsLetterGET, handlerNewsLetterPOST } from "../../controller/newsLetter/newLetter";

function handler(req: NextApiRequest, res: NextApiResponse) {


    switch (req.method) {
        case 'GET': handlerNewsLetterGET(req, res)
            break;
        case 'POST': handlerNewsLetterPOST(req, res)
            break;

        default:
            break;
    }
}

export default handler