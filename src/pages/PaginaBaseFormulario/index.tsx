import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import imagemDeFundo from './ImagemBackground.png'

const PaginaBaseFormulario = () => {

const ContainerPrincipal = styled.div`
    background-image: url(${imagemDeFundo});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    background-color: white;
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

  return (
    <ContainerPrincipal>
        <Container>
            <Outlet />
        </Container>
    </ContainerPrincipal>
  )
}

export default PaginaBaseFormulario