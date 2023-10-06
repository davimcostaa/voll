import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import Botao from "../Botao"
import Card from "./Card"

const SecaoCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%
`

const Avaliacao = ({profissionais}: {profissionais: IProfissional[] | null }) => {
  return (
    <>
     <SecaoCard>
        {profissionais?.map((profissional) => (
            <Card profissional={profissional} />
        ))}
    </SecaoCard>
    <Botao>Ver mais</Botao> 
    </>
    
  )
}

export default Avaliacao