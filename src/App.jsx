import { useState } from "react";

import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Temas";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";

function App() {

  

  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "dev-ops",
    },
    {
      id: 4,
      nome: "inteligencia-artificial",
    },
    {
      id: 5,
      nome: "data-science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

 

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ])

  function adicionarEvento(evento) {
    // eventos.push(evento);
    // console.log("esse é os eventos:", eventos);
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="Logo.png" />
      </header>
      <Banner />
      <FormularioDeEvento 
        temas={temas} 
        aoSubmeter={adicionarEvento} 
      />
      <section className="container">
        {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <div className="eventos">
              {eventos
              .map((item, index) => {
              return <CardEvento evento={item} key={index}/>
            })}
            </div>
           
           
          </section>
        );
      })}
      </section>
      
      {/*<section>
          <Tema tema={temas[1]}/>
        </section>
        <section>
          <Tema tema={temas[2]}/>
        </section>
        <section>
          <Tema tema={temas[3]}/>
        </section>
        <section>
          <Tema tema={temas[4]}/>
        </section>
        <section>
          <Tema tema={temas[5]}/>
        </section>*/}
    </main>
  );
}

export default App;
