
function WidthInput( {width, setWidth} : {width : number , setWidth: (value: number) => void}){
    
    return(
        <div>
            <label htmlFor="WidthInput">Digite a largura do botão</label>
            <input
                type="number" id="WidthInput" value={width} onChange={(e) => setWidth(Number((e.target.value)))}
            />
        </div>
    )
}

export default WidthInput