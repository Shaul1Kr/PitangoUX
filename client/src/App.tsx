import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage, { loader as FirstPageLoader } from "./Pages/FirstPage";
import Layout from "./Layouts/Layout";
import CreateNote from "./Pages/CreateNote";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", loader: FirstPageLoader, element: <FirstPage /> },
      { path: "Create", element: <CreateNote /> },
    ],
  },
]);
