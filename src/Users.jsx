import { useEffect, useState } from "react"

export default function Users () {
     const [users, setUsers] = useState([]);

     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => setUsers(data))
     } , []) // structure of use effect
     return(
          <div>
               <h2>Users: {users.length}</h2>
          </div>
     )
}