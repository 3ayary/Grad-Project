
import "./App.css";
import "./components/style/Item.css"
import "./components/style/Card.css"
import "./components/style/Footer.css"
import "./components/style/HomeCards.css"
import "./components/style/HomeCardsContainer.css"
import "./components/style/Item.css"
import "./components/style/itemDetails.css"
import "./components/style/JobContainer.css"
import "./components/style/LoginPage.css"
import "./components/style/NotFoundPage.css"
import "./components/style/spinner.css"
import "./components/style/Welcome.css"



import { Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout.jsx"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemsPage from "./pages/ItemsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ItemDetails from "./pages/itemDetails.jsx";


export default function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<MainLayout/>}>
<Route index element={<HomePage/>}/>

<Route path="items" element={<ItemsPage/>}/>
<Route path="login" element={<LoginPage/>}/>
<Route path="aboutUs" element={<AboutUsPage />}/>
<Route path="item-details/:id" element={<ItemDetails/>}/>
<Route path="*" element={<NotFoundPage/>}/>
</Route>
  )
);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
