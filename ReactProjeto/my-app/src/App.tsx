import { useEffect, useState } from 'react'
import './App.css'
import BtnColor from './components/BtnColor';
import FormChange from './components/FormChange';

function App() {
  
  const [color,setColor] = useState<number>(1);
  const [colorString, setColorString] = useState<string>('gray')
  const [size,setSize] = useState<number>(30);
  const [borderRadius, setBorderRadius]  = useState<number>(0);

  useEffect(()=>{
    if(color >= 6){
      setColor(1);
    }

    if(size >= 100){
      setSize(30)
    }

    if(borderRadius >= 50){
      setBorderRadius(0)
    }

    if(color == 1){
      setColorString('gray')
    }else if(color == 2){
      setColorString('blue')
    }else if(color == 3){
      setColorString('yellow')
    }else if(color == 4){
      setColorString('black')
    }else if(color == 5){
      setColorString('cyan')
    }else if(color == 6){
      setColorString('red')
    }

  }, [color, size, borderRadius])

  return (
    <div>
      <h1>Teste Mudança de formas no botão</h1>
      <BtnColor color={color} setColor={setColor} 
      size={size} setSize={setSize}
      borderRadius={borderRadius} setBorderRadius={setBorderRadius}/>
      <FormChange color={colorString} size={size} borderRadius={borderRadius}/>
      <p>A cor da sua forma é: {colorString.toUpperCase()}</p>
      <p>O tamanho da sua forma é: {size}</p>
      <p>O tamanho da seu border radius é: {borderRadius}</p>
    </div>
  )
}

export default App
