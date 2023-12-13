export const SingleCommentCard = ({comment}) => {

    const formattedDate = new Date(comment.created_at).toLocaleString()
    return (
        <div className='CommentCard'>
            <p>{comment.body}</p>
            <p className='spacer'></p>
            <p>- posted by {comment.author}  on the {formattedDate}</p>
        </div>
    )
}