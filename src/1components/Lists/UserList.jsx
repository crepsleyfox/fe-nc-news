import { getAllUsers } from "../../../api";
import { useState, useEffect, useContext } from "react";
import { UserCard } from "../Cards/UserCard";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((allUsersArray) => {
      setUsers(allUsersArray);
      setIsLoading(false);
    });
  }, []);

  const handleLogInClick = (username) => {
    updateUser(username);

    const redirectPath = new URLSearchParams(window.location.search).get("redirect");

    navigate(redirectPath || "/home");
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading Users...</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.username}
            user={user}
            onClick={() => handleLogInClick(user.username)}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
