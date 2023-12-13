export const SingleArticleCard = ({article}) => {
    return (
        <div className='SingleArticleCard'>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
            <p>{article.body}</p>
            <p>votes {article.votes}</p>
            <p>comments {article.comment_count}</p>
        </div>
    )
}