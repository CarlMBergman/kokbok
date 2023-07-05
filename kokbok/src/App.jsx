import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from './views/StartPage'
import Recipe from './views/Recipe'
import AllRecipes from './views/AllRecipes'
import FindRecipe from './views/FindRecipe'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartPage/>
    },
    {
      path: '/recipe',
      element: <Recipe/>
    },
    {
      path: '/allrecipes',
      element: <AllRecipes/>
    },
    {
      path: '/findrecipe',
      element: <FindRecipe/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
