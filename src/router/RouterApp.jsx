import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { MisTareas } from "../pages/MisTareas"
import { NotFound } from "../pages/NotFound"
import { Register } from "../pages/Register"
import { PrivateRoute } from "../components/PrivateRoute"
import { Home } from "../pages/Home"

export const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/mistareas"
        element={
          <PrivateRoute>
            <MisTareas />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)