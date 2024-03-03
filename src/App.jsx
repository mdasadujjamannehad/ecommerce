import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayouts from "./Components/RootLayouts";
import Home from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import ProductDetails from "./Components/pages/ProductDetails";
import Error from "./Components/pages/Error";
import SignUp from "./Components/pages/SignUp";
import Counter from "./Components/Counter";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Route>
  )
);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
