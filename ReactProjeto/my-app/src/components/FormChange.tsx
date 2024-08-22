import { useEffect, useState } from "react"

function FormChange( {borderRadius, color, size} : {borderRadius : number, color : string, size : number} ){

    const [borderRadiusValue, setBorderRadiusValue] = useState<number>(0);
    const [colorValue, setColorValue] = useState<string>('gray');
    const [sizeValue, setSizeValue] = useState<number>(60);

    useEffect(()=>{
        setBorderRadiusValue(borderRadius);
        setColorValue(color);
        setSizeValue(size);
    }, [borderRadius, color, size])

    return (
        <div style={{margin: '0 auto',borderRadius: borderRadiusValue, backgroundColor: colorValue, width: `${sizeValue}px`, height: `${sizeValue}px`, transition: '1s'}}>
            
        </div>
    )
}

export default FormChange;