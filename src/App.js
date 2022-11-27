
import { useState } from 'react'
import './app.css'

export default function App() {

  const [peso, setPeso] = useState('') // Tudo que o usuario digitar será armazado aqui
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    //alert('Altura ' + altura);
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    //alert(imc.toFixed(2)) //Define as casas decimais
    
    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem("Cuidado obesidade: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type = 'text'
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange = { (e) => setPeso(e.target.value) }// Acessa tudo que o usuario digitar
        />

        <input
          type = 'text'
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange = { (e) => setAltura(e.target.value) }
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}