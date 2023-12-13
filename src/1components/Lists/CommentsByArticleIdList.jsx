import { SingleCommentCard } from "../Cards/SingleCommentCard"

const CommentsByArticleIdList = ({comments}) => {
    return (
        <div>
            <h2>user comments</h2>
            <ul className='ListBulletRemoval'>
                {comments.map((comment) => (
                    <li key={comment.comment_id}>
                        <SingleCommentCard comment={comment}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CommentsByArticleIdList