import { useSelector } from "react-redux"
import { RoleGuard } from "./Default/RoleGuard"
import { GuestGuard } from "./Guest/GuestGuard"
import { RouterProvider } from "react-router-dom"




export const AuthGuard = () => {
    const {token} =useSelector((state)=>state.auth)

  return (
    token ? <RoleGuard /> : <RouterProvider router={GuestGuard}/>
  )
}
