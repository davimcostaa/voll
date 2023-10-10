
interface DepoimentosProps {
    texto: string,
    identificacao: string
} 

const Depoimento = ({texto, identificacao}: DepoimentosProps) => {

  return (
    <div>
        <p>{texto}</p>
        <h3> {identificacao} </h3>
    </div>
  )
}

export default Depoimento