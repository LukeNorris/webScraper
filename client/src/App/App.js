import React, { useState, useEffect } from 'react'
import './App.css'
import DataTable from '../DataTable/DataTable'
import results from '../Data.json'
import DataTableEmployees from '../DataTableEmployees/DataTableEmployees'

function App() {
    let people = [...results]
    const [data, setData] = useState(results)
    const [order, setOrder] = useState(true)

    const [q, setQ] = useState("")
    const [d, setD] = useState([])
    const [searchColumns, setSearchColumns] = useState(["id"])

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => response.json())
        .then(json=> setD(json.data))
    
    }, [])


    
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

    function search(rows) {
        return rows.filter(row => 
            searchColumns.some(
                (column) => 
                    row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            )
        )
    }

   
    const columns = d[0] && Object.keys(d[0])

    return (
        <div>
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
            <table cellPadding={5} cellSpacing={5}>
                <thead>
                        {columns && 
                            columns.map(column => (
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={searchColumns.includes(column)}
                                        onChange={(e) => {
                                            const checked = searchColumns.includes(column)
                                            setSearchColumns(prev => 
                                                checked 
                                                ? prev.filter(sc => sc != column)
                                                : [...prev, column]
                                            )
                                        }}
                                    />{column}
                                </label>
                            ))}            
                </thead>          
            </table>
            <DataTableEmployees d={search(d)}/>
            <DataTable data={data} sortedField={sortedField} />         
        </div>
    )
}

export default App
