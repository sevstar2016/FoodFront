import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { token } = useAuth()
  if (!token) return <Navigate to="/auth/sign-in" replace />
  return <Outlet />
}


