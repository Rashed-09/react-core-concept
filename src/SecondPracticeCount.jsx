import { useState } from "react";

const SecondPracticeCount = () => {
     const [count, updated] = useState(1);

     function add () {
          const multiply = count * 2;
          updated(multiply);
     }

     function reduce () {
          const divition = count / 2;
          updated(divition)
     }
     return (
          <div>
               <h3>Count Number: {count}</h3>
               <button onClick={add}>add</button>
               <button onClick={reduce}>reduce</button>
          </div>
     )
}



export default SecondPracticeCount;