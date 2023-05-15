import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from './views/StartPage'
import Recipe from './views/Recipe'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartPage/>
    },
    {
      path: '/recipe',
      element: <Recipe/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
