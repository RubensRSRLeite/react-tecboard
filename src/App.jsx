import { useState } from 'react'

import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Temas'
import { Banner } from './componentes/Banner'

function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'dev-ops'
    },
    {
      id: 4,
      nome: 'inteligencia-artificial'
    },
    {
      id: 5,
      nome: 'data-science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]


  return (
    <main>
        <header>
          <img src="Logo.png"/>
        </header>
        <Banner/>
        <FormularioDeEvento/>
        {temas.map(function (item){
          return ( 
            <section>
              <Tema tema={item}/>
            </section>
        )
        })}
        
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
  )
}
  


export default App
