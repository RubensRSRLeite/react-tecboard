import { Botao } from "../botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";

import './formulario-de-evento.estilo.css'

export function FormularioDeEvento() {

    return (
      <form className="form-evento">
        <TituloFormulario>
          Preencha para criar um novo evento:
        </TituloFormulario>
        
        <div className="campos">
          <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento
          </Label>
          <CampoDeEntrada type="text" id="nome" placeholder='Summer dev hits' nome="nomeEvento"/>
        </CampoDeFormulario>
     
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Qual o nome do evento
          </Label>
          <CampoDeEntrada type="date" id="dataEvento" placeholder='Summer dev hits' nome="dataEvento"/>
        </CampoDeFormulario>
        </div>
         <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento
          </Label>
          <ListaSuspensa/>
        </CampoDeFormulario>
        <div className="acoes">
          <Botao>Criar evento</Botao>
        </div>
      </form>
    )

}