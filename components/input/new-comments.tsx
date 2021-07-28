import classes from './new-comments.module.css'
import React, { useRef, useState } from 'react';
import { IComment } from '../../model/comments/IComment';

interface INewCommentProps {
    onAddComment(comment: IComment): void
}

function NewComments(props: INewCommentProps) {


    const [isInValidComment, setIsInValidComment] = useState(false)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const nameInputRef = useRef<HTMLInputElement>(null)
    const commentlInputRef = useRef<HTMLTextAreaElement>(null)

    function sendCommentHandler(event: React.FormEvent<HTMLFormElement>) {
        setIsInValidComment(false)
        event.preventDefault()
        const email = emailInputRef.current?.value
        const name = nameInputRef.current?.value
        const text = commentlInputRef.current?.value
        if (!email || !email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {

            console.log("<- LOG -> file: new-comments.tsx -> line 29 -> sendCommentHandler -> email || email.includes('@') || !name || name.trim() === '' || !comment || comment.trim() === ''", !email, !email!.includes('@'), !name, name!.trim() === '', !text, text!.trim() === '')
            setIsInValidComment(true);
            return
        }
        props.onAddComment({ email, name, text })

    }


    return (
        <section>
            <form className={classes.form} onSubmit={sendCommentHandler}>
                <div className={classes.row}>
                    <div className={classes.control}>
                        <label
                            htmlFor="email">
                            Your email</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailInputRef}
                        />
                    </div>
                    <div className={classes.control}>
                        <label
                            htmlFor="name">
                            Your name</label>
                        <input
                            type="text"
                            id='name'
                            ref={nameInputRef}

                        />
                    </div>
                </div>
                <div>
                </div>
                <div className={classes.control}>
                    <label
                        htmlFor="comment">
                        Your comment</label>
                    <textarea
                        id='comment'
                        rows={5}
                        ref={commentlInputRef}
                    />
                </div>
                {isInValidComment && <p>invalid data</p>}
                <button className={classes.btn}>Submit</button>
            </form>
        </section>
    );
}

export default NewComments;