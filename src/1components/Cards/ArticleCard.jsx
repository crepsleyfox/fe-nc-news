export const ArticleCard = ({article}) => {
    return (
        <div className='ArticleCard'>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
        </div>
    )
}