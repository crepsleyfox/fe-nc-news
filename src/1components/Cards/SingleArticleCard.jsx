export const SingleArticleCard = ({article}) => {
    return (
        <div className='ArticleCard'>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
            <p>{article.body}</p>
        </div>
    )
}