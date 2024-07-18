import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Root from './pages/Root';

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
        path: '/demo',
        element: <div>demo</div>
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