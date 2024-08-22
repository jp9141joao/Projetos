import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ChangeInput from './components/ChangeInput';

function App() {
  
  const [widthValue, setWidthValue] = useState<number>(80);
    const [heightValue, setHeightValue] = useState<number>(80);
    const [marginValue, setMarginValue] = useState<number>(1);
    const [borderRadiusValue, setBorderRadiusValue] = useState<number>(9)
    const [colorValue, setColorValue] = useState<string>('gray')

  return (
    <div>
      <div>
        <ChangeInput 
          width={widthValue} setWidth={setWidthValue} height={heightValue} setHeight={setHeightValue} margin={marginValue} setMargin={setMarginValue}
          borderRadius={borderRadiusValue} setBorderRadius={setBorderRadiusValue} color={colorValue} setColor={setColorValue}
        />
        <Form width={widthValue} height={heightValue} margin={marginValue} borderRadius={borderRadiusValue} color={colorValue}/>
      </div>
    </div>
  )
}

export default App
