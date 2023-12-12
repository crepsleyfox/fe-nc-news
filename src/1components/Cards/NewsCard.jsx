import {Link} from 'react-router-dom'

export const NewsCard = ({article}) => {
    return (
        <div className='NewsCard'>
            <Link to={`/articles/${article.article_id}`}>
            <h2> {article.title}</h2>
            <p>written by {article.author}</p>
            </Link>
        </div>
    )
}

