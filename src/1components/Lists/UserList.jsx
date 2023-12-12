import { getAllUsers } from "../../../api";
import { useState, useEffect, useContext } from "react";
import { UserCard } from "../Cards/UserCard";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";


const UserList = () => {
    const [users, setUsers] = useState([])
    const {updateUser} = useContext(UserContext)
    const navigate = useNavigate()


    useEffect(() => {
        getAllUsers()
        .then((allUsersArray) => {
            setUsers(allUsersArray)
        })
    }, [])

    const handleLogInClick = (username) => {
        updateUser(username)
        navigate('/homepage')
        
    }


    return (
        <>
        {users.map((user) => {
            return <UserCard
            key={user.username}
            user={user}
            onClick={() => handleLogInClick(user.username)}
            />
        })}
        </>
    )

}

export default UserList