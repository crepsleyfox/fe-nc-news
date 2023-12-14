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

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setSingleArticle(singleArticle);
    });
    getCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
      setIsLoading(false);
    });
  }, []);

  const handleVote = (votes) => {
    voteOnArticle(article_id, votes).then((updatedArtilceWithNewVotes) => {
      setSingleArticle((singleArticle) => ({
        ...singleArticle,
        votes: updatedArtilceWithNewVotes.votes,
      }));
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
      {comments.length > 0 && <CommentsByArticleIdList comments={comments} />}
    </div>
  );
};

export default SingleArticleList;
