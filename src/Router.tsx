import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import PaginaBase from "./pages/PaginaBase"
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario"
import PaginaInicial from "./pages/PaginaInicial"
import RotaPrivada from "./utils/RotaPrivada"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route path="/pagina-inicial" element={<PaginaInicial />} />
              <Route element={<RotaPrivada />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
            <Route path="/" element={<PaginaBaseFormulario />}>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router