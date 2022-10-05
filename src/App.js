import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Author from './components/Author/Author';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([

    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path:'/about',
          element: <About/>,
        },
        {
          path:'/contact',
          element: <Contact/>
        },
        {
          path:'/details/:detailsId',
          element: <Details/>,
          loader: async({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.detailsId}`)
        },
        {
          path:'/author/:authorId',
          element: <Author/>,
          loader: async({params:{authorId}})=> fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        },
        {
          path:'/',
          element: <Blog/>,
          loader: async()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        },
      ]
    }
   
  ])
  return (
    <div className="App">
      <RouterProvider router = {router} ></RouterProvider>
    </div>
  );
}

export default App;