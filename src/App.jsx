import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginGuard from "./guards/LoginGuard";
import Login from "./Pages/Login";
import NonLoggedGuard from "./guards/NonLoggedGuard";
import HomePage from "./Pages/HomePage";
import LoginSignUp from "./Pages/LoginSignUp";
import SignUp from "./Pages/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    element: <NonLoggedGuard />,
    children: [
      {
        path: "/",
        element: <LoginSignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <LoginGuard />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace/>,
  },
]);
function App() {
  return (<Provider store={store}><RouterProvider router={router}/></Provider>)
}

export default App;
