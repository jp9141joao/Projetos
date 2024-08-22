
function ChangeInput(
    {width, height, margin, borderRadius, color, setWidth, setHeight, setMargin, setBorderRadius, setColor} : 
    {width : number, height : number, margin : number, borderRadius : number, color: string, 
    setWidth: (value : number) => void, setHeight: (value : number) => void,
    setMargin: (value : number) => void, setBorderRadius: (value : number) => void, setColor: (value : string) => void}){

    return (
        <div>
            <div>
                <label htmlFor="InputWidth">Digite o valor da width: </label>
                <input type="number" id="InputWidth" value={width} onChange={(e) => setWidth(Number(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="InputHeight">Digite o valor do height: </label>
                <input type="number" id="InputHeight" value={height} onChange={(e) => setHeight(Number(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="InputBorder">Digite o tamanho do border: </label>
                <input type="number" id="InputBorder" value={margin} onChange={(e) => setMargin(Number(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="InputBorderRadius">Digite o tamanho do border radius: </label>
                <input type="number" id="InputBorderRadius" value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="InputColor">Digite a cor da box: </label>
                <input type="text" id="InputColor" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
        </div>
    )
}

export default ChangeInput
