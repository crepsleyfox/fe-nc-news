import {
  getArticleById,
  getCommentsByArticleId,
  voteOnArticle,
} from "../../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "../Cards/SingleArticleCard";
import CommentsByArticleIdList from "./CommentsByArticleIdList";

const SingleArticleList = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setSingleArticle(singleArticle);
    });
    getCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
      setIsLoading(false);
    });
  }, []);

  const handleVote = (NewVotes) => {

    setSingleArticle((singleArticle) => ({
        ...singleArticle, votes: singleArticle.votes + NewVotes,
    }))
    setError(null);

    voteOnArticle(article_id, NewVotes)
    .catch((error) => {
      setSingleArticle((singleArticle) => ({
        ...singleArticle, votes: singleArticle.votes - NewVotes,
      }))
      setError("Something went wrong. Try again");
    });
  };

  if (isLoading) {
    return <p>loading comments...</p>;
  }

  if (singleArticle === null) {
    return <p>loading article...</p>;
  }

  return (
    <div>
      <SingleArticleCard article={singleArticle} onClick={handleVote} />
      {error ? <p>{error}</p> : null}
      {comments.length > 0 && <CommentsByArticleIdList comments={comments} />}
    </div>
  );
};

export default SingleArticleList;
