import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from './views/StartPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartPage/>
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={ router }/>
    </div>
  )
}

export default App
