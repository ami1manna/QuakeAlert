import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Root from './pages/Root';
import  Chart  from './pages/Chart';
import ResponsePage from './pages/ResponsePage';
import Evacuation from './pages/Evacuation';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/chart',
        element: <Chart/>
      },
      {
        path: '/response',
        element:<ResponsePage/>
      },
      {
        path:'/evacuation',
        element:<Evacuation/>
      }
      
    ]
  }
]);
const App = () => {
  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App