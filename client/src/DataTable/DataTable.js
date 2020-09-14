import React from 'react'

export default function DataTable({data}) {
    return (
        <div>
        <table className="table table-sortable" >
                <thead>
                    <tr className="heading">
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>IP address</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        data.map((row, i)=> (
                            <tr key={data[i].id}>
                              <td>{data[i].id}</td>
                              <td>{data[i].first_name}</td>
                              <td>{data[i].last_name}</td>
                              <td>{data[i].email}</td>
                              <td>{data[i].gender}</td>
                              <td>{data[i].ip_address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}
