import { useState } from 'react'

import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <header>
          <img src="Logo.png"/>
        </header>
        <section>
          <img src="Hero image_L.png"/>
        </section>
        <FormularioDeEvento/>
    </main>
  )
}
  


export default App
