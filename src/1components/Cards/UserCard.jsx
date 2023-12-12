export const UserCard = ({user, onClick}) => {
    return (
        <div className='UserCard' onClick={onClick}>
            <h2> {user.username}</h2>
            <img className='UserCardImage'
                src = {user.avatar_url}
                alt = {user.username}
                />
        </div>
    )
}

