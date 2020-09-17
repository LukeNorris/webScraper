import React, { useState } from 'react'
import './App.css'
import DataTable from '../DataTable/DataTable'
import results from '../Data.json'

function App() {
    let people = [...results]
    const [data, setData] = useState(results)
    const [order, setOrder] = useState(true)

    
    function sortedField(key){
        setData(people.sort((a,b) => {
            if(order) {
                setOrder(false)
                return((b[key] < a[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0)); 
            } else {
                setOrder(true)
                return ((a[key] < b[key]) ? -1 : ((b[key] > a[key]) ? 1 : 0));
            }
        }))
    }

    return (
        <div>
            <DataTable data={data} sortedField={sortedField} />         
        </div>
    )
}

export default App
