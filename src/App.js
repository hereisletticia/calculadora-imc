//html goes here
export default function App(){
  return(
    <div classNome="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div classNome="area-input">
        <input 
          type="text" 
          placeholder="Peso (kg) ex: 90"
        />
        <input 
          type="text" 
          placeholder="Peso (cm) ex: 180"
        />

        <button>
          Calcular
        </button>
    </div>
      <h2>Seu IMC foi 25, você está abaixo do peso.</h2>
    </div>    
  )
}