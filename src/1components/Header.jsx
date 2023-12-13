import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <p>logged in as </p>
            <h2>{ user } </h2>
            
            
        </>
    )
}