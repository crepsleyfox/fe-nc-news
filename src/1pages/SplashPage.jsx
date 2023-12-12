import { useNavigate } from "react-router-dom";

export const SplashPage = () => {
    const navigate = useNavigate()
   
    
const handleGoToLoginScreen = () => {
   
    navigate('/login')
    
}

    return (
        <div>
            <h1>NC NEWS</h1>
            <p> get all the best news here</p>
            <button onClick={handleGoToLoginScreen}>log in here</button>
        </div>
    )
}