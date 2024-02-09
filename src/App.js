import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';

function App() {
  let myRouters = createBrowserRouter([
    {path:'', element: <Layout/>, children:[
      {index:true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>},
    ]}
  ])
  return (<RouterProvider router={myRouters}></RouterProvider>
);
}

export default App;
