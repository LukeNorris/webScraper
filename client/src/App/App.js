import React from 'react'
import './App.css'
import DataTable from '../DataTable/DataTable'
import data from '../Data.json'

function App() {

    return (
        <div>
            <DataTable data={data}/>         
        </div>
    )
}

export default App
