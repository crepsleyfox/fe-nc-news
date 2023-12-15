import { useState, useContext, useEffect } from "react";
import { postComment } from "../../api";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState(localStorage.getItem("commentText") || "");
  const [loginMessage, setLoginMessage] = useState("");
  
  const [hasSubmit, setHasSubmit] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem('commentText', newComment)
  }, [newComment]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (user === "Guest") {
      setLoginMessage("Please log in to post a comment");
      return;
    }
    setHasSubmit(true);

    postComment(article_id, newComment, user).then((newCommentFromApi) => {
      setNewComment("");
      setComments((currentComments) => {
        return [newCommentFromApi, ...currentComments];
      });
      setLoginMessage("");

      setHasSubmit(false);
    });
  };

  const isCommentEmpty = newComment.trim() === "";

  return (
    <div>
      {loginMessage && (
        <div>
          <p>{loginMessage}</p>
          <Link to={`/login?redirect=/articles/${article_id}`}
          onClick={() => setNewComment(newComment)}>
            <button>Click here to Login</button>
          </Link>
        </div>
      )}
      <form className="CommentAdder" onSubmit={handleCommentSubmit}>
        <textarea
          id="newComment"
          multiline="true"
          value={hasSubmit ? newComment : newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="type your comment here"
        ></textarea>
        <p>
          <button disabled={isCommentEmpty || hasSubmit}>
          {hasSubmit ? "posting comment..." : "Post Comment"}</button>
        </p>
        
      </form>
    </div>
  );
};

export default CommentAdder;
