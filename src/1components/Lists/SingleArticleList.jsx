import { getArticleById } from "../../../api"
import { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { SingleArticleCard } from "../Cards/SingleArticleCard";

const SingleArticleList = () => {
    
    const {article_id} = useParams()
    const [singleArticle, setSingleArticle] = useState(null)


    useEffect(() => {
        getArticleById(article_id)
        .then((singleArticle) => {
            setSingleArticle(singleArticle)
        })
    }, [])

    if (singleArticle === null) {
        return <p>loading article...</p>
    }

    return (
        <div>
            <SingleArticleCard
            article={singleArticle}/>
        </div>
    )
}

export default SingleArticleList

