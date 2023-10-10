import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';


const ItemPesquisa = ({texto}: {texto: string}) => {

    const ItemEstilizado = styled.div`
        display: flex;
        padding: 4px 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: var(--cinza-claro);
        width: fit-content;
        cursor: pointer;
    `

  return (
    <ItemEstilizado>
        {texto}
        <ClearIcon />
    </ItemEstilizado>
  )
}

export default ItemPesquisa