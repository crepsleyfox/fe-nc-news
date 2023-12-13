import axios from 'axios'


const ncNews = axios.create({
  baseURL: 'https://nc-news-hckw.onrender.com/api/',
})

export const getAllUsers = () => {
  return ncNews.get('users')
    .then((res) => {
      const users = res.data.users;
      return users;
    });
};

export const getAllArticles = () => {
  return ncNews.get('articles')
    .then((res) => {
      const articles = res.data.articles;
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return ncNews.get(`articles/${article_id}`)
    .then((res) => {
      const articleById = res.data.articles;
      return articleById;
    });
};

export const getCommentsByArticleId = (article_id) => {
    return ncNews.get(`articles/${article_id}/comments`)
    .then((res) => {
        const commentsByArticleId = res.data.comments
        return commentsByArticleId
    })
};
