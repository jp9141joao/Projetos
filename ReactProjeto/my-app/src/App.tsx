import { useState } from 'react'
import './App.css'
import Lista from './components/Lista';
import AdicionarItem from './components/AdicionarItem';

interface ProdutoLista {
  idProduto: number;
  nomeProduto: string;
  quantidade: number;
  preco: number;
  local: string;
}

function App() {

  const [listaProdutosValue, setListaProdutosValue] = useState<ProdutoLista[]>([]);
  const [showLista, setShowLista] = useState<boolean>(true);
  const [showAdicionarItem, setShowAdicionarItem] = useState<boolean>(false);
  const [showMudarItem, setShowMudarItem] = useState<boolean>(false);
  const [showExcluirItem, setShowExcluirItem] = useState<boolean>(false);


  return (
    <div>
      <Lista listaProdutos={listaProdutosValue} show={showLista} setShow={setShowLista}/>
      <AdicionarItem setListaProdutos={setListaProdutosValue} show={showAdicionarItem} setShow={setShowAdicionarItem}/>
    </div>
  )
}

export default App