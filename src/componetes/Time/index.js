import Colaborador from '../Colaborador'
import './Time.css'

/*
    Esse componente foi passado para o APP.js e foi retornado as informações de cada time atraves 
    de prop
*/

const Time = (props) =>{
    const css={backgroundColor: props.corSecundaria}

    return(
        
        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <Colaborador/>
            <Colaborador/>
        </section>
    )
}

export default Time