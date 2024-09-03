import { useEffect, useState } from "react";
import DaysTravelPrint from "../components/DaysTravelPrint";
import { getDailyExpenses, getTravelById } from "../service/api";
import ComeBack from "../components/ComeBack";
import { useParams } from "react-router-dom";

interface travel {
    id: string,
    name: string,
    day: number
}

function TravelHome(){

    const { id } = useParams<{id: string}>();
    const [travel, setTravel] = useState<travel>(
        { id: '', name: '', day: 0 }
    );
    const [day, setday] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>();
    

    async function loadTravel(){
        try{
            const response = await getTravelById(id as string);
            setTravel(response.data);
        }catch(error){
            console.error("Error loading travel", error)
        }
    }

    async function createDays(){
        try{
            const response = await getTravelById(id as string);
            setday(response.data.day);
            for(day; day - 1; day <= 0){
                await createDays();
            }
        }catch(error){
            console.error("Error loading day", error)
        }
    }

    async function loadValue(){
        try{
            const expenses = await getDailyExpenses();
            const value = expenses.data.value
            const total = value.forEach((item: number) => total + item )
            setTotalValue(total)
        }catch(error){
            console.error("Error loading total travel's expenses", error)
        }
    }

    useEffect(() => {
        loadTravel();
        loadValue();
        createDays();
    },[])

    return (
        <div>
            <h3>Your daily travel expense log</h3>
            <div>
                <p>Expenses total</p>
                <input type="number" value={totalValue}/>
            </div>
            <DaysTravelPrint id={id} day={travel.day}/>
            <ComeBack/>
            
        </div>
    )
}

export default TravelHome;