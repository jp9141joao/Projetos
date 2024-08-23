import { useState } from "react";

interface Produto {
    idProduto: number;
    nomeProduto: string;
    quantidade: number;
    preco: number;
    local: string;
}

function Lista( {listaProdutos, show, setShow} : { listaProdutos : Produto[], show: boolean, setShow: (value: boolean) => void}){
    
    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? 'Esconder lista' : 'Mostrar lista'}</button>
            {
                show ?
                (
                    <ul>
                        {
                            listaProdutos.map((item)=>(
                                <li key={item.idProduto}>Nome: {item.nomeProduto} | Quantidade: {item.quantidade} | Preço: {item.preco} | Local: {item.local}</li>
                            ))
                        }
                    </ul>
                ) : ''
            }
        </div>
    )

}

export default Lista;