import { useState } from "react"

export default function Counter () {
     const [count, setCount] = useState(0);

     const handleAdd = () => {
          const increaseCount = count + 1;
          setCount(increaseCount)
     }

     const handleReduce = () => {
          const reduceCount = count - 1;
          setCount(reduceCount)
     }
     return (
          <div style={{border:"2px solid green", padding: "20px"}}>
               <h3>Counter: {count}</h3>
               <button onClick={handleAdd}>Add number</button>
               <button onClick={handleReduce}>Reduce number</button>
          </div>
     )
}