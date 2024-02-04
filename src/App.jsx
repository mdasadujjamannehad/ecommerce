import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayouts from "./Components/RootLayouts";
import Home from "./Components/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />} />
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
