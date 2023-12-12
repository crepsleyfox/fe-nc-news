import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState('Guest')

    const updateUser = (newUser) => {
        setUser(newUser)
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}