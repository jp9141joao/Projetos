import { useState } from "react";

interface Produto {
    idProduto: number;
    nomeProduto: string;
    quantidade: number;
    preco: number;
    local: string;
}

function AdicionarItem({setListaProdutos, show, setShow}){

    const [produto, setProduto] = useState<Produto>();
    
    return (
        <div>
            <h1>Adicionar Item</h1>
            <div>
                <label htmlFor="InputId">Digite seu nome: </label>
                <input id="InputId" type="number" value={produto?.idProduto}/>
                <label htmlFor="InputName">Digite seu nome: </label>
                <input type="text" value={produto?.nomeProduto}/>
                <input type="number" value={produto?.quantidade}/>
                <input type="number" value={produto?.quantidade}/>
                <input type="text" value={produto?.quantidade}/>
            </div>
        </div>        
    )
}

export default AdicionarItem;