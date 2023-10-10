import Cabecalho from "../../components/Cabecalho"
import { Outlet } from "react-router-dom"
import { Rodape } from "../../components/Rodape"

const PaginaBase = () => {
  return (
    <>
        <Cabecalho />
        <main>
            <Outlet />
        </main>
        <Rodape />
    </>
  )
}

export default PaginaBase