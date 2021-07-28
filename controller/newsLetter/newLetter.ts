import { NextApiResponse, NextApiRequest } from 'next';



export function handlerNewsLetterGET(req: NextApiRequest, res: NextApiResponse) {
}

export function handlerNewsLetterPOST(req: NextApiRequest, res: NextApiResponse) {
    const userEmail = req.body.email;

    // dummy validation
    if (!userEmail || !userEmail.includes('@')) {
        return res.status(422).json({ message: "invalid emaiil address" })
    }

    console.log(`userEmail`, userEmail);
    return res.status(201).json({ message: 'signed up' })
}




