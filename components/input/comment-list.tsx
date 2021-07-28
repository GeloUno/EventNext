import classes from './comment-list.module.css';

function CommentList() {
    return (
        <ul className={classes.comments}>
            {/* Render list of comments - fetched from API */}
            <li>
                <p>My comment is amazing!</p>
                <div>
                    By <address>Tom</address>
                </div>
            </li>
            <li>
                <p>My comment is amazing!</p>
                <div>
                    By <address>Lee</address>
                </div>
            </li>
        </ul>
    );
}

export default CommentList;