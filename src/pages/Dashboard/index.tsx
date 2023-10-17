import { Container } from '@mui/material'
import React, { useState } from 'react'
import Avaliacao from '../../components/Avaliacao'
import Botao from '../../components/Botao'
import Cabecalho from '../../components/Cabecalho'
import Grafico from '../../components/Grafico'
import { Rodape } from '../../components/Rodape'
import Subtitulo from '../../components/Subtitulo'
import Tabela from '../../components/Tabela'
import Titulo from '../../components/Titulo'
import useDadosConsulta from '../../useDadosConsulta'
import useDadosProfissional from '../../useDadosProfissional'
import ModalCadastro from './Modal'

const Dashboard = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const {dados: consultas, erro: erroConsultas} = useDadosConsulta();
    const {dados: profissionais, erro: erroProfissionais} = useDadosProfissional();
  
    if (erroConsultas || profissionais) {
      console.log('Erro na requisição')
    }

  return (
      <Container>
        <Titulo>
         Área Administrativa
        </Titulo>
        <Botao onClick={() => handleOpen()}>Cafastrar especialista</Botao>
        <ModalCadastro open={open} handleClose={handleClose} />
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Avaliacao profissionais={profissionais} />
        </Container>
  )
}

export default Dashboard