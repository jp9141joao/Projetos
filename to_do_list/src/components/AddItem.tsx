import { useEffect, useState } from 'react';

interface ShapeList {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

function AddItem({list, setList} : {list : ShapeList[], setList : (value: ShapeList[]) => void}){
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('01/01/2000');
    const [endDate, setEndDate] = useState<string>('31/12/2100')
    const [itemValue, setItemValue] = useState<ShapeList>({id: 0, name: '', description: '', startDate: '00/00/0000', endDate: '31/12/2100'});
    const [showMenssageFields, setShowMenssageFields] = useState<boolean>(false);
    const [showMenssageDate, setShowMenssageDate] = useState<boolean>(false);
    const [showMenssageSuccess, setShowMenssageSuccess] = useState<boolean>(false);

    function IdGenerator(min: number, max: number) : number {
        let idValue: number = Math.floor(Math.random() * (max - min + 1)) + min;

        while(list.some(item => item.id == idValue)){
            idValue = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        return idValue;
    }

    function DateConversor(date: string){
        const dd: string = date[8] + date[9];
        const mm: string = date[5] + date[6];
        const aa: string = date[0] + date[1] + date[2] + date[3]
        const layout: string = `${dd}/${mm}/${aa}`

        return layout;
    }

    function HandleButton(){
        if(name != '' && description != '' && startDate != '01/12/2000' && endDate != '31/12/2100'){
            /*const newList = [...list, itemValue];
            setList(newList);
            setShowMenssageSuccess(true)
            setName('');
            setDescription('');
            setStartDate('01/01/2000');
            setEndDate('31/12/2100');*/
            
            const startDateValue: number = Date.parse(startDate);
            const endDateValue: number = Date.parse(endDate);
            if(startDateValue < endDateValue){
                //setStartDate(DateConversor(startDate));
                //setEndDate(DateConversor(endDate));
                const newList = [...list, itemValue];
                setList(newList);
                setShowMenssageSuccess(true);
                setName('');
                setDescription('');
                setStartDate('01/01/2000');
                setEndDate('31/12/2100');
            }else{
                setShowMenssageDate(true);
            }
            
        }else{ 
            setShowMenssageFields(true)
        }
    }

    useEffect(() => {
        setId(IdGenerator(1000,9999))
        const item: ShapeList = {
            id: id,
            name: name,
            description: description,
            startDate: DateConversor(startDate),
            endDate: DateConversor(endDate),
        }
        setItemValue(item);
    }, [name, description, startDate, endDate])

    return (
        <div>
            <div>
                <label htmlFor="InputName">Type the chore's name: </label>
            </div>
            <div>
                <input id='InputName' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputDescription">Type the chore's description: </label>
            </div>
            <div>
                <input id='InputDescription' type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputStartDate">Type the chore's start date: </label>
            </div>
            <div>
                <input id='InputStartDate' type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="InputEndDate">Type the chore's end date: </label>
            </div>
            <div>
                <input id='InputEndDate' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            </div>
            <div>
                <button onClick={HandleButton}>Add item!</button>
                {
                    showMenssageSuccess  ? <p>Item added!</p> : 
                    ( showMenssageDate ? <p>Please, provite a start and a end date valid!</p> : 
                    ( showMenssageFields ? <p>Plase, fill all the fields!</p> : null))
                }
            </div>
        </div>
        
    )
}

export default AddItem;