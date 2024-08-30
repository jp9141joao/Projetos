import { useEffect, useState } from "react"
import { deleteTravelExpenses, getTravelExpenses } from "../service/api";
import { Link } from "react-router-dom";

interface travelExpenses {
    id: number,
    name: string, 
    type: string,
    date: string, 
    countryCurrency: number,
    value: number
}

function TravelExpensesList(){

    const [travelExpenses, setTravelExpenses] = useState<travelExpenses[]>([]);

    async function loadTravelExpenses(){
        const response = await getTravelExpenses();
        setTravelExpenses(response.data);
    }

    async function handleDelete(id: number){
        const response = await deleteTravelExpenses(id as number);
        setTravelExpenses(response.data);
    }

    useEffect(() => {
        loadTravelExpenses();
    },[])

    return (
        <div>
            <h3>Travel Expenses</h3>
            {
                travelExpenses.map(item => (
                    <p key={item.id}>
                        Name: {item.name} -
                        Expense Type: {item.name} -
                        Date: {item.date} -
                        Country Currency: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} - Value: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} -
                        Value: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} - Value: {item.countryCurrency == 1 ? '$' : (item.countryCurrency == 2 ? 'R$' : (item.countryCurrency == 3 ? 'MEX$' : (item.countryCurrency == 4 ? '£' : (item.countryCurrency == 5 ? '€' : (item.countryCurrency == 6 ? 'C$' : null)))))}{item.value} -
                        <Link to={`/travelExpenses/edit/${item.id}`}>Edit data</Link>
                        <div>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </p>
                ))
            }
        </div>
    )
}

export default TravelExpensesList;