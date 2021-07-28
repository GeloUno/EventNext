import classes from './comment-list.module.css';
import { IComment } from '../../model/IComment';

interface ICommentListProps {
    dataCommentsEvent: Array<IComment> | null
}
function CommentList({ dataCommentsEvent }: ICommentListProps) {


    return (
        <ul className={classes.comments}>

            {dataCommentsEvent && (dataCommentsEvent.length > 0) && (dataCommentsEvent.map((event) => {
                return (
                    <li key={event.text}>
                        <p>{event.text}</p>
                        <div>
                            By <address>{event.name}</address>
                        </div>
                    </li>
                )
            }))}
        </ul>
    );
}

export default CommentList;