import './App.css'
import { UserProvider } from './1components/UserContext'
import { Routes, Route, useLocation} from 'react-router-dom'
import UserList from './1components/Lists/UserList'
import { Header } from './1components/Header'
import { HomePage } from './1pages/HomePage'



const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname.startsWith('/homepage')
  

  return (
    <UserProvider>
       {isHomePage && <Header />}
      <Routes>
        <Route path='/' element ={<UserList/>}/>
        <Route path='/homepage' element = {<HomePage/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
