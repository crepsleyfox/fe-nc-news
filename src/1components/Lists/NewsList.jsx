import { getAllArticles } from "../../../api";
import { useState, useEffect } from "react";
import { NewsCard } from "../Cards/NewsCard";


const NewsList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)



useEffect(() => {
    getAllArticles()
    .then((allArticlesArray) => {
        const sortedArticlesByDateCreated = [...allArticlesArray].sort((a, b) =>
        new Date(b.created_at) - new Date(a.created_at))
        setIsLoading(false)
        setArticles(sortedArticlesByDateCreated)
    })
}, [])


return (
    <div>
        {isLoading ? (<p>Loading News List...</p>) : (
            articles.map((article) => (
                <NewsCard
                key={article.title}
                article={article}
                />
            ))

        )}
        
    </div>
)

}

export default NewsList

