import { useEffect, useState } from "react";

function WidthButton( {width} : {width : number}){

    const [widthButton, setWithButton] = useState<number>(80)

    useEffect(()=>{
        setWithButton(width)
    }, [width])

    return (
        <div>
            <h3>Width do seu botão é de {widthButton}</h3>
            <button style={{width: `${widthButton}px`, backgroundColor: 'gray', border: '1px solid black', borderRadius: '9px'}}>Click aqui!</button>
        </div>
    )
}

export default WidthButton