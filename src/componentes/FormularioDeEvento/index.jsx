import { Botao } from "../botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";


import "./formulario-de-evento.estilo.css";

export function FormularioDeEvento({ temas, aoSubmeter}) {

  function aoFormSubmetido(formData) {
    console.log('criar novo evento TESTE', formData);
    const evento = {
        capa: formData.get('capa'),
        tema: temas.find(function (item) {
          return item.id == formData.get('tema')
        }),
        data: new Date(formData.get('dataEvento')),
        titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um novo evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa ?</Label>
          <CampoDeEntrada
            type="text"
            id='capa'
            placeholder="http://..."
            name='capa'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Qual a data do evento?</Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            placeholder="Summer dev hits"
            name="dataEvento"
          />
        </CampoDeFormulario>
      </div>

      <CampoDeFormulario>
        <Label htmlFor="tema">Qual o tema do evento</Label>
        <ListaSuspensa id="tema" name="tema" itens={temas} />
      </CampoDeFormulario>

      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
