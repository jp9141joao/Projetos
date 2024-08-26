import { useState } from "react";

interface ShapeList {
    id: number;
    name: string;
    description: string
    startDate: string;
    endDate: string;
}

function ShowList({list} : {list : ShapeList[]}){

    const [showList, setShowList] = useState<boolean>(false);

    return(
        <div>
            <button onClick={() => setShowList(!showList)}>{showList ? 'Hide list!' : 'Show list!' }</button>
            {  showList ? ( list.length == 0 ? <p>You don't have chores yet!</p> : <ul>
                    {list.map((e)=>(
                        <li key={e.id}> Name: {e.name} | Description: {e.description} | Start Date: {e.startDate} | End Date: {e.endDate}</li>
                    ))}
                </ul>
                ) : null
            }
            
        </div>
    )
}

export default ShowList