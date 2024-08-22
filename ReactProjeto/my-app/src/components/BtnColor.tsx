function BtnColor( {color, size, borderRadius, setColor, setSize, setBorderRadius} : 
    {color : number, size : number, borderRadius : number,setColor : (value : number) => void, setSize : (value : number) => void, 
    setBorderRadius : (value : number) => void} ){

    return(
        <div>
            <button onClick={() => setColor(color + 1)}>Color!</button>
            <button onClick={() => setSize(size + 10)}>Size!</button>
            <button onClick={() => setBorderRadius(borderRadius + 5)}>Border Radius!</button>
        </div>
    )
}

export default BtnColor;
