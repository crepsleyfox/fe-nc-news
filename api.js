export const getAllUsers = () => {
    return fetch('https://nc-news-hckw.onrender.com/api/users')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const users = data.users
        return users
    })
}

export const getAllArticles = () => {
    return fetch('https://nc-news-hckw.onrender.com/api/articles')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const articles = data.articles
        return articles
    })
}