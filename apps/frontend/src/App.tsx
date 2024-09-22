import "./App.css";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Error404 from "./routes/Error404";
import Scheck from "./routes/Scheck";
import ProtectedRoute from "./routes/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/scheck",
    element: (
      <ProtectedRoute>
        <Scheck />
      </ProtectedRoute>
    ),
  },
  {
    path: "error",
    element: <Error404 />,
  },
];
const router = createBrowserRouter(routes);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
