import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from './views/StartPage'
import Recipe from './views/Recipe'
import AllRecipes from './views/AllRecipes'

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
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
