import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
    margin-top: 25px;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: center;
    width: 10%;
    margin: 1em auto;
    gap: 24px
`

const ItemEstilizada = styled.li`
    list-style-type: none;
`

export function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizada>
                    <a href='#'>
                        <img src={facebook} alt='Logo do Facebook' />
                    </a>
                </ItemEstilizada>

                <ItemEstilizada>
                    <a href='#'>
                        <img src={whatsapp} alt='Logo do Whatsapp' />
                    </a>
                </ItemEstilizada>

                <ItemEstilizada>
                    <a href='#'>
                        <img src={google} alt='Logo do Google' />
                    </a>
                </ItemEstilizada>
                
                <ItemEstilizada>
                    <a href='#'>
                        <img src={instagram} alt='Logo do Instagram' />
                    </a>
                </ItemEstilizada>
            </ListaEstilizada>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}