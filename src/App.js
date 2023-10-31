import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'
function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar></Navbar>
      <ThemeSelector></ThemeSelector>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/create">
        <Create></Create>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route path="/recipe:id">
        <Recipe></Recipe>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
