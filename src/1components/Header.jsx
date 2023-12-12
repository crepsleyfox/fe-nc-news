import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1>{ user } </h1>
            <p>is logged in</p>
        </>
    )
}