import { useEffect, useState } from "react"

function FormChange( {borderRadius, bgColor, size} : {borderRadius : number, bgColor : string, size : number} ){

    const [borderRadiusValue, setBorderRadiusValue] = useState<number>(0);
    const [bgColorValue, setBgColorValue] = useState<string>('gray');
    const [sizeValue, setSizeValue] = useState<number>(60);

    useEffect(()=>{
        setBorderRadiusValue(borderRadius);
        setBgColorValue(bgColor);
        setSizeValue(size);
    }, [borderRadius])

    return (
        <div style={{borderRadius: borderRadiusValue, backgroundColor: bgColorValue, width: `${sizeValue}px`, height: `${sizeValue}px`}}>
            
        </div>
    )
}

export default FormChange;