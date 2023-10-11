import { Divider } from "@mui/material"
import styled from "styled-components"

interface DepoimentosProps {
    texto: string,
    identificacao: string
} 

const Depoimento = ({texto, identificacao}: DepoimentosProps) => {

  const DepoimentoEstilizado = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;
  `

  const DivEstilizada = styled.div`
      width: 792px;
      p {
        font-size: 16px;
        color: var(--cinza)
      }

      h3 {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
      }
  `

  return (
    <DepoimentoEstilizado>
      <DivEstilizada>
        <p>{texto}</p>
        <h3> {identificacao} </h3>
        <Divider />
      </DivEstilizada>

    </DepoimentoEstilizado>
  )
}

export default Depoimento