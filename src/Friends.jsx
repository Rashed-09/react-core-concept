import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends () {
     const [friends, setFriends] = useState([])
     
     useEffect( () => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setFriends(data))
     },[])
     return (
          <div style={{padding: "14px", border:"2px solid tomato", margin: "10px"}}>
               <h4>Object Length: {friends.length}</h4>
               {
                    friends.map(frnd => <Friend frnd={frnd}></Friend>)
               }
          </div>
     )
}

