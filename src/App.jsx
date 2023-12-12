import './App.css'
import { UserProvider } from './1components/UserContext'
import { Routes, Route, useLocation} from 'react-router-dom'
import { Header } from './1components/Header'
import { HomePage } from './1pages/HomePage'
import { SplashPage } from './1pages/SplashPage'
import { LogInPage } from './1pages/LogInPage'




const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname.startsWith('/main')
  

  return (
    <UserProvider>
       {isHomePage && <Header />}
      <Routes>
        <Route path='/' element ={<SplashPage/>}/>
        <Route path='/login' element ={<LogInPage/>}/>
        <Route path='/main' element = {<HomePage/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
