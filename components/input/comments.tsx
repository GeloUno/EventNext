import classes from './comments.module.css'
import React, { useContext, useEffect, useState } from 'react';
import NewComments from './new-comments';
import { IComment } from "../../model/comments/IComment";
import CommentList from './comment-list';
import NotificationContext from '../../store/notification-context';
import { StatusNotificationEnum } from '../../model/Notification/StatusNotificationEnum';


interface ICommentsProps {
    eventId: string
}

function Comments({ eventId }: ICommentsProps) {

    const [isShowComment, setIsShowComment] = useState<boolean>(false)

    const [commentsEvent, setCommentsEvent] = useState<Array<IComment> | null>(null)

    const notificationCtx = useContext(NotificationContext)

    function reloadCommentFromServer() {
        fetch(`/api/comments/${eventId}`)
            .then(respons => respons.json())
            .then(data => setCommentsEvent(data))

    }

    useEffect(() => {
        if (isShowComment) {
            reloadCommentFromServer()
        }
        return () => {
        }
    }, [isShowComment])

    function toggleShowComment() {
        setIsShowComment(prev => !prev)
    }

    function addCommnet(comment: IComment) {

        notificationCtx?.showNotification({
            title: "New comment",
            message: "saving comment...",
            status: StatusNotificationEnum.PENDING
        })
        fetch(`/api/comments/${eventId}`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': "aplication/json"
            }
        })
            .then(response => {

                if (response.ok) {
                    return response.json()
                } else {
                    throw response.json().then(data => data)
                }

            })
            .then((data: { message: string, comment: IComment }) => {

                setCommentsEvent((prev): IComment[] => {
                    if (prev === null) {
                        return [data.comment]
                    } else {
                        return [data.comment, ...prev]
                    }

                })
                notificationCtx?.showNotification({
                    title: 'Success',
                    status: StatusNotificationEnum.SUCCESS,
                    message: "Your comment was add to event"
                })
            }
            )
            .catch(err => {

                notificationCtx?.showNotification({
                    title: "Error",
                    status: StatusNotificationEnum.ERROR,
                    message: "I can't save Your comment"
                })
            })
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleShowComment}>{isShowComment ? 'Hidden' : "Show"} Comments</button>
            {isShowComment && <NewComments onAddComment={addCommnet} eventId={eventId} />}
            {isShowComment && (commentsEvent != null) && <CommentList dataCommentsEvent={commentsEvent} />}
        </section>
    );
}

export default Comments;