import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';


// components
import NavBar from './components/Navbar'

// pages
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<NavBar />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='shop' element={<Shop />} />
  </Route>
))




function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
