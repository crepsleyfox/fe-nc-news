import { SingleCommentCard } from "../Cards/SingleCommentCard";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const CommentsByArticleIdList = ({ comments, onDeleteComment, deleteComment }) => {

    const {user} = useContext(UserContext)

  return (
    <div>
      <h2>user comments</h2>
      <ul className="ListBulletRemoval">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <SingleCommentCard
              key={comment.comment_id}
              comment={comment}
              onDeleteComment={onDeleteComment}
              isUserComment={comment.author === user}
              deleteComment={deleteComment}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsByArticleIdList;
