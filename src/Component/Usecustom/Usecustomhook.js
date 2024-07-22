import { useState } from "react"

  
 const Usecustomhook = (initialValue = 0) => {
    const [count,setcount] = useState(initialValue)

    const increment = ()=> setcount(count=>count+1)
    const decrement = () =>setcount(count => count-1)
    const reset = () => setcount(initialValue);
   return { count ,increment, decrement,reset
   };
 }
 
 export default Usecustomhook
 