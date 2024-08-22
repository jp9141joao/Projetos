import { useEffect, useState } from "react";

function Form({width, height, margin, borderRadius, color} : {width : number, height : number, margin : number, borderRadius : number, color : string} ){

    const [widthValue, setWidthValue] = useState<number>(80);
    const [heightValue, setHeightValue] = useState<number>(80);
    const [marginValue, setmarginValue] = useState<number>(1);
    const [borderRadiusValue, setBorderRadiusValue] = useState<number>(9)
    const [colorValue, setColorValue] = useState<string>('gray')

    useEffect(()=>{
        setWidthValue(width);
        setHeightValue(height);
        setmarginValue(margin);
        setBorderRadiusValue(borderRadius);
        setColorValue(color);

        const Interval = setTimeout(()=>{
            setBorderRadiusValue((e) => e += 1)
        },10)

        return () => clearInterval(Interval)
    },[width, height, margin, borderRadius, color])

    return (
        <div>
            <div style={{width: `${widthValue}px`, height: `${heightValue}px`, margin: `${marginValue}px`, borderRadius: `${borderRadiusValue}px`, backgroundColor: colorValue}}>
            </div>
        </div>
    )

}

export default Form