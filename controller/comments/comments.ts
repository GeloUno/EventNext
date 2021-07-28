import { NextApiResponse, NextApiRequest } from 'next';
import { IComment } from '../../model/comments/IComment';

export function handlerCommentsGET(req: NextApiRequest, res: NextApiResponse, eventId: string) {
    const dummyList = [
        {
            id: "c1",
            eventId: "e2",
            name: "Lee",
            text: "some comment from Lee",
            email: "lee@goo.uk"
        }, {
            id: "c2",
            eventId: "e1",
            name: "Tom",
            text: "some comment from Tom",
            email: "tom@goo.uk"
        },
        {
            id: "c3",
            eventId: "e2",
            name: "Ami",
            text: "some comment from Ami",
            email: "ami@goo.uk"
        }, {
            id: "c4",
            eventId: "e3",
            name: "More",
            text: "some comment from More",
            email: "more@goo.uk"
        },
        {
            id: "c5",
            eventId: "e3",
            name: "Zeze",
            text: "some comment from Zeze",
            email: "zeze@goo.uk"
        }, {
            id: "c6",
            eventId: "e1",
            name: "Lucas",
            text: "some comment from Lucas",
            email: "lucas@goo.uk"
        },
        {
            id: "c7",
            eventId: "e4",
            name: "Rome",
            text: "some comment from Rome",
            email: "rome@goo.uk"
        }, {
            id: "c8",
            eventId: "e3",
            name: "Ali",
            text: "some comment from Ali",
            email: "ali@goo.uk"
        },
        {
            id: "c9",
            eventId: "e5",
            name: "Miky",
            text: "some comment from Miky",
            email: "mike@goo.uk"
        }, {
            id: "c10",
            eventId: "e5",
            name: "Doe",
            text: "some comment from Doe",
            email: "doe@goo.uk"
        },
        {
            id: "c11",
            eventId: "e2",
            name: "Ana",
            text: "some comment from Ana",
            email: "ana@goo.uk"
        }, {
            id: "c12",
            eventId: "e2",
            name: "Kate",
            text: "some comment from Kate",
            email: "kate@goo.uk"
        },
    ]

    const dataEventListById = dummyList.filter(data => { return data.eventId === eventId })

    return res.status(200).json([...dataEventListById])
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