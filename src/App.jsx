import './App.css'
import { UserProvider } from './1components/UserContext'
import { Routes, Route, useLocation} from 'react-router-dom'
import { Header } from './1components/Header'
import { HomePage } from './1pages/HomePage'
import { SplashPage } from './1pages/SplashPage'
import { LogInPage } from './1pages/LogInPage'
import SingleArticleList from './1components/Lists/SingleArticleList'




const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname.startsWith('/home')
  const isArticles = location.pathname.startsWith('/articles')
  

  return (
    <UserProvider>
       {isHomePage || isArticles && <Header />}
      <Routes>
        <Route path='/' element ={<SplashPage/>}/>
        <Route path='/login' element ={<LogInPage/>}/>
        <Route path='/home' element = {<HomePage/>}/>
        <Route path='/articles/:article_id' element={<SingleArticleList/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
