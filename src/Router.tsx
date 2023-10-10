import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PaginaBase from "./pages/PaginaBase"
import PaginaInicial from "./pages/PaginaInicial"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route path="/pagina-inicial" element={<PaginaInicial />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router