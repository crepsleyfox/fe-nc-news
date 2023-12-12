import { getAllArticles } from "../../../api";
import { useState, useEffect } from "react";
import { NewsCard } from "../Cards/NewsCard";


const NewsList = () => {
    const [articles, setArticles] = useState([])



useEffect(() => {
    getAllArticles()
    .then((allArticlesArray) => {
        const sortedArticlesByDateCreated = [...allArticlesArray].sort((a, b) =>
        new Date(b.created_at) - new Date(a.created_at))
        setArticles(sortedArticlesByDateCreated)
    })
}, [])


return (
    <div>
        {articles.map((article) => {
            return <NewsCard
            key={article.title}
            article={article}/>
        })}
    </div>
)

}

export default NewsList

