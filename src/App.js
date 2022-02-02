import {useState} from 'react'
import './app.css';

export default function App(){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  function calculoIMC(){
    const alt = height/100;
    const imc = weight/(alt*alt);

    if (imc < 18.6) {
      setMessage("Você está abaixo do peso. " + " Seu IMC é: " + imc.toFixed(1));      
    }else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Peso ideal." + " Seu IMC é: " + imc.toFixed(1));      
    }else if (imc >= 24.9 && imc < 34.9) {
      setMessage("Você está um pouco acima do peso. " + " Seu IMC é: " + imc.toFixed(1));
    }else if (imc > 34.9) {
      setMessage("Cuidado, OBESIDADE!" + " Seu IMC é: " + imc.toFixed(1));
    }
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
          placeholder="Altura (cm) ex: 180"
          value={height}
          onChange={ (e) => setHeight(e.target.value)}          
        />

        <button onClick={calculoIMC}>
          Calcular
        </button>
    </div>

      <h2>{message}</h2>
    </div>    
  )
}