import React from 'react'
import './App.css'

function App() {
    return (
        <div>
            <table className="table table-sortable">
                <thead>
                    <tr className="heading">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>2</td>
                        <td>Kat</td>
                        <td>31</td>
                        <td>ecomonist</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jo</td>
                        <td>35</td>
                        <td>Designer</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Amos</td>
                        <td>Project manager</td>
                        <td>IT</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default App
