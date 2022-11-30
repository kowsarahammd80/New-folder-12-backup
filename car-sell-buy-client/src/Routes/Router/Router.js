
import { createBrowserRouter } from "react-router-dom";
import AllBuyer from "../../Componets/AllBuyer/AllBuyer";
import AllReport from "../../Componets/AllReport/AllReport";
import AllUsers from "../../Componets/AllUsers/AllUsers";
import Blogs from "../../Componets/Blogs/Blogs";
import CarCategoris from "../../Componets/CarCategoris/CarCategoris";
import CarCategoryShowCard from "../../Componets/CarCategoryShow/CarCategoryShowCard";
import Category from "../../Componets/Category/Category";
import DeshBoard from "../../Componets/DeshBoard/DeshBoard";
import Login from "../../Componets/Login/Login";
import BoostProduct from "../../Componets/MyProductList/BoostProduct";
import SignUp from "../../Componets/SinUp/SignUp";
import Stripe from "../../Componets/Stripe/Stripe";
import Main from "../../Layout/Main/Main";
import AddProductPage from "../../Pages/AddProductPage/AddProductPage";
import HomePage from "../../Pages/HomePage/HomePage";
import MyOrderListPage from "../../Pages/MyOrderListPage/MyOrderListPage";
import ProductMyList from "../../Pages/ProductMyList/ProductMyList";
import DeshBoardNave from "../../Sheard/DeshBoardNave/DeshBoardNave";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";



const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h4>You are wrong</h4>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/Carcategory',
        element: <PrivateRoute><CarCategoris></CarCategoris></PrivateRoute>
      },
      {
        path: '/addproduct',
        element: <SellerRoute><AddProductPage></AddProductPage></SellerRoute>
      },
      {
        path: '/myorder',
        element: <MyOrderListPage></MyOrderListPage>
      },
      {
        path: '/stripe',
        element: <Stripe />
      },
      {
        path: '/myProductList',
        element: <SellerRoute><ProductMyList></ProductMyList></SellerRoute>
      },
      {
        path: '/boostProduct/:email',
        element: <BoostProduct></BoostProduct>,
        loader: ({ params }) => fetch(`https://car-sell-buy-server-kowsarahammd80.vercel.app/products/${params.seller}`)

      },
      {
        path: '/categoris',
        element: <PrivateRoute> <Category></Category> </PrivateRoute>
      },
      {
        path: '/carCategoryShowCard/:model',
        element: <PrivateRoute> <CarCategoryShowCard></CarCategoryShowCard> </PrivateRoute>

      },
      {
        path: '/alluser',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

      {
        path: '/allbuyer',
        element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
      },
      {
        path: '/allReport',
        element: <AdminRoute><AllReport></AllReport></AdminRoute>
      }
    ]
  },

  {
    path: '*',
    element: <div className="d-flex justify-content-center align-item-center">
      <h2> This route not found </h2>
    </div>
  }

])

export default routers;