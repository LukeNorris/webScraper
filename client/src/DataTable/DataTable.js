import React, {useState, useEffect} from 'react'

export default function DataTable({data, sortedField}) {
 const [people, setPeople] = useState([])

 useEffect(() => {
  setPeople(data)    
 }, [data])

    return (
        <table className="table table-sortable" >
                <thead>
                    <tr className="heading">
                        <th>id
                            <button onClick={()=>sortedField('id')}>sort</button>
                        </th>
                        <th>First Name
                            <button onClick={()=>sortedField('first_name')}>sort</button>
                        </th>
                        <th>Last name
                            <button onClick={()=>sortedField('last_name')}>sort</button>
                        </th>
                        <th>email
                            <button onClick={()=>sortedField('email')}>sort</button>   
                        </th>
                        <th>gender
                            <button onClick={()=>sortedField('gender')}>sort</button>
                        </th>
                        <th>IP address
                            <button onClick={()=>sortedField('ip_address')}>sort</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        people.map((person)=> (
                            <tr key={person.id}>
                              <td>{person.id}</td>
                              <td>{person.first_name}</td>
                              <td>{person.last_name}</td>
                              <td>{person.email}</td>
                              <td>{person.gender}</td>
                              <td>{person.ip_address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>    
    )
}
