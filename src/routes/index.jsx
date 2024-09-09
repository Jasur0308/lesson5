import { Navigate, useRoutes } from "react-router-dom"
import Home from "./Home"
import Auth from "./Auth"
import Login from "./Login"
import Profile from "./Profile"
import { useSelector } from "react-redux"

const RouteController = () => {
    const token = useSelector(state => state.token)

  return useRoutes ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>
            },
        ]
    },
    {
        path: "/profile",
        element: token ? <Profile/> : <Navigate to="/auth/login"/>
    }
  ]
  )
}

export default RouteController