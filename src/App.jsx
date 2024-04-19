
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import SecondLayout from './layouts/SecondLayout';
import Error from './pages/Error';
import Home from './pages/home/Home'
import News from './pages/news/News';
import About from './pages/about/About'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "news",
          element: <News></News>
        }
      ]
    },
    {
      path: "/secondLayout",
      element: <SecondLayout></SecondLayout>
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
