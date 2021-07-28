import classes from './comments.module.css'
import React, { useEffect, useState } from 'react';
import NewComments from './new-comments';
import { IComment } from "../../model/IComment";
import CommentList from './comment-list';

interface ICommentsProps {
    eventId: string
}

function Comments({ eventId }: ICommentsProps) {

    const [isShowComment, setIsShowComment] = useState<boolean>(false)
    const [commentsEvent, setCommentsEvent] = useState<Array<IComment> | null>(null)
    useEffect(() => {
        if (isShowComment) {
            fetch(`/api/comments/${eventId}`)
                .then(respons => respons.json())
                .then(data => setCommentsEvent(data))
        }
        return () => {
        }
    }, [isShowComment])

    function toggleShowComment() {
        setIsShowComment(prev => !prev)
    }

    function addCommnet(comment: IComment) {
        fetch(`/api/comments/${eventId}`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: { 'Content-Type': "aplication/json" }
        }).then(response => response.json()).then(data =>
            console.log("<- LOG -> file: comments.tsx -> line 24 -> Comments -> data", data)
        ).catch(err => { console.log(`err`, err) })
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleShowComment}>{isShowComment ? 'Hidden' : "Show"} Comments</button>
            {isShowComment && <NewComments onAddComment={addCommnet} />}
            {isShowComment && (commentsEvent != null) && <CommentList dataCommentsEvent={commentsEvent} />}
        </section>
    );
}

export default Comments;