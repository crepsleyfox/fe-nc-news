export const SingleArticleCard = ({article, onClick}) => {
    return (
        <div className='SingleArticleCard'>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
            <p>{article.body}</p>
            <p><button onClick={() => onClick(1)}>UpVote</button> votes {article.votes} <button onClick={() => onClick(-1)}>Downvote</button></p>
            <p>comments {article.comment_count}</p>
        </div>
    )
}