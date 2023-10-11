import styled from 'styled-components'
import banner from './banner.png'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import RoomIcon from '@mui/icons-material/Room';
import Botao from '../../components/Botao';
import ItemPesquisa from '../../components/ItemPesquisa';
import Card from '../../components/Card';
import Depoimento from '../../components/Depoimento';

const SectionEstilizada = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`

const TituloEstilizado = styled.h2`
  position: absolute;
  font-size: 32px;
  color: var(--cinza-claro);
  margin: 120px;
`

const Imagem = styled.img`
  width: 100%;
`

const DivInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  flex-wrap: wrap;
  
`

const SectionInputs = styled.section`
   margin: 40px;
`

const TextoEstilizado = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--cinza);
  text-align: center;
`

const TextoEstilizado2 = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--azul-escuro);
  text-align: center;
`

const PaginaInicial = () => {
  return (
    <>
      <SectionEstilizada>
        <TituloEstilizado>Encontre profissionais de diversas <br /> especialidades e agende sua consulta com <br /> facilidade!</TituloEstilizado>
        <Imagem src={banner} />
      </SectionEstilizada>

      <SectionInputs>
         <DivInputs>
         <TextField
        id="input-with-icon-textfield"
        placeholder='Digite a especialidade'
        sx={{
          width: '423px',
          backgroundColor: '#F8F8F8',
        }}
        InputProps={{
          startAdornment: (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundColor: '#E1E8EB', height: 55, width: 50, marginLeft: -13, border: '0px solid green', marginRight: 5 }}>
              <InputAdornment position="start">
                <SearchSharpIcon style={{ marginLeft: 10 }} />
              </InputAdornment>
            </div>
          ),
        }}
        variant="outlined"
      />

    <TextField
        id="input-with-icon-textfield"
        placeholder='Digite a localidade'
        sx={{
          width: '423px',
          backgroundColor: '#F8F8F8',
        }}
        InputProps={{
          startAdornment: (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundColor: '#E1E8EB', height: 55, width: 50, marginLeft: -13, border: '0px solid green', marginRight: 5 }}>
              <InputAdornment position="start">
                <RoomIcon style={{ marginLeft: 10 }} />
              </InputAdornment>
            </div>
          ),
        }}
        variant="outlined"
      />

        <Botao>
          Buscar
        </Botao>
      </DivInputs>

        <TextoEstilizado>Você pode estar procurando por estas categorias: </TextoEstilizado>

        <DivInputs>
          <ItemPesquisa texto='Neurologista' />
          <ItemPesquisa texto='Dermatologista' />
          <ItemPesquisa texto='Cardiologista' />
          <ItemPesquisa texto='Ortopedista' />
          <ItemPesquisa texto='Oftamologista' />
          <ItemPesquisa texto='Pediatria' />
        </DivInputs>
      </SectionInputs>
     
     <DivInputs>
          <Card icone='HealthAndSafetyIcon' titulo='Encontre especialistas' />
          <Card icone='CalendarMonthIcon' titulo='Agende consultas' />
          <Card icone='NotificationsIcon' titulo='Defina lembretes' />
          <Card icone='ThumbUpAltIcon' titulo='Avalie o serviço' />
     </DivInputs>

     <TextoEstilizado2> Depoimentos: </TextoEstilizado2>

    <Depoimento 
        texto='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.' 
        identificacao='Júlio, 40 anos, São Paulo/SP.'
    />

    <Depoimento 
        texto='Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.' 
        identificacao='Júlio, 40 anos, São Paulo/SP.'
    />

    <Depoimento 
        texto='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.' 
        identificacao='Júlio, 40 anos, São Paulo/SP.'
    />

    </>
  )
}

export default PaginaInicial
