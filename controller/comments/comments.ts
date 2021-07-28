import { NextApiResponse, NextApiRequest } from 'next';
import { IComment } from '../../model/IComment';

export function handlerCommentsGET(req: NextApiRequest, res: NextApiResponse) {
    const dummyList = [{
        id: "c1",
        name: "Lee",
        text: "some comment from Lee",
        email: "lee@goo.uk"
    }, {
        id: "c2",
        name: "Tom",
        text: "some comment from Tom",
        email: "tom@goo.uk"
    },
    ]

    return res.status(200).json({ comments: dummyList })
}



export function handlerCommentsPOST(req: NextApiRequest, res: NextApiResponse) {

    const data: IComment = JSON.parse(req.body);

    const { email, name, text } = data

    // dummy validation
    if (!email || !email.includes('@') || !name || name.trim() === "" || !text || text.trim() === '') {
        return res.status(422).json({ message: 'no valid data' })
    }
    const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
    }
    console.log("<- LOG -> file: [eventId].ts -> line 20 -> handlerPOST -> newComment", newComment)

    return res.status(201).json({ message: 'Create comment', comment: newComment })
}