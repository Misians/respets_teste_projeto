import { useState } from 'react'
import Button from './components/Button'
import './App.scss'


function App() {

  const [input, setInput] = useState("");

  

  return (
    <div className="App">
      <header className="App-header">
        <div className='conect'>

          <input type="text" />
          <span >Valor: </span>

          <p>Conecte-se na sua conta</p>
        </div></header>
        <div className='button'>
          <Button>Legal</Button>
          <button className='Face'>Se logar com Facebook</button>
          <button className='Google'>Se logar com Google</button>
        </div>
    </div>
  )
}

export default App
