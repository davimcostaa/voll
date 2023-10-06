import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

const Card = ({profissional}: {profissional: IProfissional}) => {

    const ContainerEstilizado = styled.div`
        flex: 40%;
        max-width: 100%;
        background-color: #FFFFFF;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.15)
        border-radius: 8x;
        color: var(--cinza);
        margin: 1em 2em 1em;
    `

  return (
    <ContainerEstilizado>
        <ul>
            <li>
                <img src={profissional.imagem}
                alt={`Foto de perfil do profissional ${profissional.nome}`}
                />
            </li>
            <li>
                <p>{profissional.nome}</p>
                <p>{profissional.especialidade}</p>
            </li>
            <li>
                <Rating 
                name="simple-controlled"
                value={profissional.nota}
                readOnly={true}
                />
            </li>
        </ul>
    </ContainerEstilizado>
  )
}

export default Card