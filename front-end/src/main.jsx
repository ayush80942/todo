import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import Welcome from './components/Welcome.jsx';
import LogIn from './components/Login.jsx';
import Error from './components/Error.jsx';
import Todos from './components/Todos.jsx';
import Logout from './components/Logout.jsx';
import Todo from './components/Todo.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <LogIn />
        },
        {
          path: '/welcome/:username',
          element: <Welcome />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/logout',
          element: <Logout />
        },
        {
          path: '/todos',
          element: <Todos />
        },
        {
          path: '/todo/:id',
          element: <Todo />
        },
        {
          path: '*',
          element: <Error />
        },
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
