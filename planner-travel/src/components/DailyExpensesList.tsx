import { useEffect, useState } from "react"
import { deleteDailyExpenses, getDailyExpenses } from "../service/api"
import { Link } from "react-router-dom";

interface dailyExpenses {
    id: number,
    name: string,
    expenseShared: boolean,
    countryCurrency: number,
    value: number,
    day: number
}

function DailyExpensesList(){

    const [dailyExpenses,setDailyExpenses] = useState<dailyExpenses[]>([])

    async function loadDailyExpenses(){
        
        const response = await getDailyExpenses();
        setDailyExpenses(response.data);
    }

    async function handleDelete(id: number){

        const response = await deleteDailyExpenses(id);
        setDailyExpenses(response.data);
    }

    useEffect(() => {
        loadDailyExpenses();
    },[])

    return (
        <div>
            <h3>Daily Expenses</h3>
            <div>
                {
                    dailyExpenses.map((item) => (
                        <p key={item.id}>
                            Name: {item.name} - 
                            Expense is Shared: {item.expenseShared ? 'Yes' : 'No'} - 
                            Country Currency: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} - Value: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} - 
                            Value: {item.countryCurrency == 1 ? 'American Dollar' : (item.countryCurrency == 2 ? 'Brazilian Real' : (item.countryCurrency == 3 ? 'Mexican Pesos' : (item.countryCurrency == 4 ? 'Pound Sterling' : (item.countryCurrency == 5 ? 'Euro' : (item.countryCurrency == 6 ? 'Canadian Dollar' : null)))))} - Value: {item.countryCurrency == 1 ? '$' : (item.countryCurrency == 2 ? 'R$' : (item.countryCurrency == 3 ? 'MEX$' : (item.countryCurrency == 4 ? '£' : (item.countryCurrency == 5 ? '€' : (item.countryCurrency == 6 ? 'C$' : null)))))}{item.value} -
                            Day: {item.day}
                            <div>
                                <Link to={`/dailyExpenses/edit/${item.id}`}>Edit data</Link>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default DailyExpensesList