import { getArticleById, getCommentsByArticleId } from "../../../api"
import { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { SingleArticleCard } from "../Cards/SingleArticleCard";
import CommentsByArticleIdList from "./CommentsByArticleIdList";

const SingleArticleList = () => {
    
    const {article_id} = useParams()
    const [singleArticle, setSingleArticle] = useState(null)
    const [comments, setComments] = useState([])


    useEffect(() => {
        getArticleById(article_id)
        .then((singleArticle) => {
            setSingleArticle(singleArticle)
        })
        getCommentsByArticleId(article_id)
        .then((articleComments) => {
            setComments(articleComments)
        })
    }, [])

    if (singleArticle === null) {
        return <p>loading article...</p>
    }

    return (
        <div>
            <SingleArticleCard article={singleArticle}/>
            <CommentsByArticleIdList comments={comments}/>
        </div>
    )
}

export default SingleArticleList

