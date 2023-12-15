import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-hckw.onrender.com/api/",
});

export const getAllUsers = () => {
  return ncNews.get("users").then((res) => {
    const users = res.data.users;
    return users;
  });
};

export const getAllArticles = () => {
  return ncNews.get("articles").then((res) => {
    const articles = res.data.articles;
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNews.get(`articles/${article_id}`).then((res) => {
    const articleById = res.data.articles;
    return articleById;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNews.get(`articles/${article_id}/comments`).then((res) => {
    const commentsByArticleId = res.data.comments;
    return commentsByArticleId;
  });
};

export const voteOnArticle = (article_id, votes) => {
  return ncNews
    .patch(`articles/${article_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.article;
    });
};

export const postComment = (article_id, newCommentText, user) => {
  const postBody = {
    username: user,
    body: newCommentText,
  };
  return ncNews
    .post(`articles/${article_id}/comments`, postBody)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncNews.delete(`comments/${comment_id}`);
};
