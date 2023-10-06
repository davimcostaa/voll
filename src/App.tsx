import './App.css';
import Avaliacao from './components/Avaliacao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import { Rodape } from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {

  const {dados: consultas, erro: erroConsultas} = useDadosConsulta();
  const {dados: profissionais, erro: erroProfissionais} = useDadosProfissional();

  if (erroConsultas || profissionais) {
    console.log('Erro na requisição')
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>
         Área Administrativa
        </Titulo>
      <Tabela consultas={consultas} />
      <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Grafico consultas={consultas} profissionais={profissionais} />
      <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
   
  );
}

export default App;
