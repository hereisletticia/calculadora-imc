import {useState} from 'react'
import './app.css';

export default function App(){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function calculoIMC(){
    alert("clcik")
  }

  return(
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className='area-input'>
        <input 
          type="text" 
          placeholder="Peso (kg) ex: 90"
          value={weight}
          onChange={ (e) => setWeight(e.target.value)}         
        />
        <input 
          type="text" 
          placeholder="Peso (cm) ex: 180"
          value={height}
          onChange={ (e) => setHeight(e.target.value)}          
        />

        <button onClick={calculoIMC}>
          Calcular
        </button>
    </div>

      <h2>Seu IMC foi 25, você está abaixo do peso.</h2>
    </div>    
  )
}