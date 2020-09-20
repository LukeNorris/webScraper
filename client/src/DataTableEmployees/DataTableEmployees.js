import React, {useState, useEffect} from 'react'
import './DataTableEmployee.css'

function DataTableEmployees({d}) {
   
    const columns = d[0] && Object.keys(d[0])

    return (
        <table cellPadding={5} cellSpacing={5} className="table-body">
            <thead>
                <tr className="heading">{d[0] && columns.map(heading => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {d.map((row) => (
                    <tr>
                        {columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
       
    )
}

export default DataTableEmployees
