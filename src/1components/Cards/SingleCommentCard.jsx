import { useState } from "react"

export const SingleCommentCard = ({comment, onDeleteComment, isUserComment, deleteComment}) => {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = () => {
        setIsDeleting(true)
        deleteComment(comment.comment_id)
        .then(() => {
            onDeleteComment(comment.comment_id)
            setIsDeleting(false)
        })
    }

    const formattedDate = new Date(comment.created_at).toLocaleString()
    return (
        <div className='CommentCard'>
            <p>{comment.body}</p>
            <p className='spacer'></p>
            <p>- posted by {comment.author}  on the {formattedDate}</p>
            {isUserComment && (
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Deleting Comment...' : 'Delete Comment'}</button>
                )}
        </div>
    )
}