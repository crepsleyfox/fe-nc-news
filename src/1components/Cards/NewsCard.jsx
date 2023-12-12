export const NewsCard = ({article}) => {
    return (
        <div className='NewsCard'>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
        </div>
    )
}

