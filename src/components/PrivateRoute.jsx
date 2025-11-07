import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg">
        Cargando...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}
