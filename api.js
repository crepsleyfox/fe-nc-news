export const getAllUsers = () => {
  return fetch("https://nc-news-hckw.onrender.com/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const users = data.users;
      return users;
    });
};

export const getAllArticles = () => {
  return fetch("https://nc-news-hckw.onrender.com/api/articles")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const articles = data.articles;
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return fetch(`https://nc-news-hckw.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const articleById = data.articles;
      return articleById;
    });
};

export const getCommentsByArticleId = (article_id) => {
    return fetch(`https://nc-news-hckw.onrender.com/api/articles/${article_id}/comments`)
    .then((res)=> {
        return res.json()
    })
    .then((data) => {
        const commentsByArticleId = data.comments
        return commentsByArticleId
    })
};
