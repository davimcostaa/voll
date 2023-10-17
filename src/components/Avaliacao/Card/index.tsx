import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

const Card = ({profissional}: {profissional: IProfissional}) => {

    const ContainerEstilizado = styled.div`
        flex: 40%;
        max-width: 100%;
        background-color: #FFFFFF;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
        border-radius: 8px;
        color: var(--cinza);
        margin: 2em;
    `
    
    const ListaEstilizada = styled.ul`
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
    `
    const ItemEstilizado = styled.li`
        display: flex;
        align-items: center;
        gap: 10px;
    `

    const TextoEstilizado = styled.p`
        color: var(--cinza);
        font-weight: 700;
        margin: 0px;
    `

    const TextoEstilizadoSecundario = styled.p`
    color: var(--cinza);
    margin: 0px;
    margin-top: 8px;
    `
    

  return (
    <ContainerEstilizado>
        <ListaEstilizada>
            <ItemEstilizado>
                <img src={profissional.imagem}
                alt={`Foto de perfil do profissional ${profissional.nome}`}
                />
                <li>
                    <TextoEstilizado>{profissional.nome}</TextoEstilizado>
                    <TextoEstilizadoSecundario>{profissional.especialidade}</TextoEstilizadoSecundario>
                </li>
               
            </ItemEstilizado>
            <li>
                <Rating 
                name="simple-controlled"
                value={3}
                readOnly={true}
                size="large"
                />
            </li>
        </ListaEstilizada>
    </ContainerEstilizado>
  )
}

export default Card