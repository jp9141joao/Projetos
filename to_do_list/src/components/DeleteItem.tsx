import { useEffect, useState } from 'react';


interface ShapeList {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

function DeleteItem({list, setList} : {list : ShapeList[], setList : (value : ShapeList[]) => void}){

    const [id, setId] = useState<number>(0);
    const [menssage, setMenssage] = useState<boolean | undefined>(undefined);
    const index: number = list.findIndex(item => item.id == id);

    function HandleButton(){
        if(list.some(item => item.id == id)){
            const newList = list;
            newList.splice(index, 1)
            setList(newList)
            setMenssage(true);
            setId(0);
        }else{
            setMenssage(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setMenssage(undefined);   
        }, 5000);
    }, [menssage])

    useEffect(() => {

    }, [])

    return (
        <div>
            <div>
                {
                    <ul style={{textAlign: 'start'}}>
                        {
                            list.length > 0 ? list.map((e) => (
                                <li key={e.id}> Id: {e.id} | Name: {e.name} | Description: {e.description} | Start Date: {e.startDate} | End Date: {e.endDate}</li>
                            )) : <p>You don't have chores yet!</p>
                        }
                    </ul>
                }
            </div>
            <div>
                <label htmlFor="InputId">Type your chore's ID: </label>
            </div>
            <div>
                <input id='InputId' type='number' value={id} onChange={(e) => setId(Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={HandleButton}>Delete item</button>
                <p>{menssage === true ? 'Item deleted!' : (menssage === false ? "Item didn't find!" : null )}</p>
            </div>
        </div>
    )
}

export default DeleteItem;
