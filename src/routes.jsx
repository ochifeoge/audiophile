import MainLayout from "./layout/MainLayout";
import EarPhones from "./pages/EarPhones";
import HeadPhones from "./pages/HeadPhones";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Speakers from "./pages/Speakers";

const route = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <HeadPhones />,
      },
      {
        path: "/earphones",
        element: <EarPhones />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
];

export default route;
