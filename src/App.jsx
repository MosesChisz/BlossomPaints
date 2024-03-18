import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Blog01 from "./pages/blogs/Blog01";
import Blog02 from "./pages/blogs/Blog02";
import Blog03 from "./pages/blogs/Blog03";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/blog01" element={<Blog01/>}></Route>
        <Route path="/blog02" element={<Blog02/>}></Route>
        <Route path="/blog03" element={<Blog03/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
