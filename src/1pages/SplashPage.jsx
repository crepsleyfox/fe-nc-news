import { useNavigate } from "react-router-dom";

export const SplashPage = () => {
    const navigate = useNavigate()
   
    
const handleGoToLoginScreen = () => {
    navigate('/login')
}

const handleGoToMainAsGuest = () => {
    navigate('/home')
}

    return (
        <div>
            <h1>NC NEWS</h1>
            <p> get all the best news here</p>
            <button onClick={handleGoToLoginScreen}>log in here</button>
            <button onClick={handleGoToMainAsGuest}>continue as guest</button>
        </div>
    )

}