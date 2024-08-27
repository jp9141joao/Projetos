import { useState } from 'react'
import './App.css'
import ShowList from './components/ShowList';
import AddItem from './components/AddItem';
import DeleteItem from './components/DeleteItem';

interface ShapeList {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

function App() {
  const [list, setList] = useState<ShapeList[]>([]);
  const [showPage1, setShowPage1] = useState<boolean>(true);
  const [showPage2, setShowPage2] = useState<boolean>(false);
  const [showPage3, setShowPage3] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  function HandleButtonPage2(){
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
    setShowButton(true);

  }

  function HandleButtonPage3(){
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    setShowButton(true);
  }

  function HandleButtonComeBack(){
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    setShowButton(false);
  }

  return (
    <div>
      <h3>To Do List!</h3>
      {
        showPage1 && <>
                      <ShowList list={list}/>
                      <button onClick={HandleButtonPage2}>Add chores to list</button>
                      <button onClick={HandleButtonPage3}>Delete chores to list</button> 
                    </>
      }
      {
        showPage2 && <AddItem list={list} setList={setList}/>
      }
      {
        showPage3 && <DeleteItem list={list} setList={setList}/>
      }
      {
        showButton && <button onClick={HandleButtonComeBack}>Come back</button>
      }
    </div>
  )
}

export default App