import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
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