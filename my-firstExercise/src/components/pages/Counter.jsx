import { useState } from 'react';

function Counter() {
 const [count,setCount] = useState(0)
return(
<>
<h2 class="text-brand font-bold"> counter: {count}</h2>

<button onClick={()=>setCount(count+1)}> 
Increase button
</button>
</>
)
};


export default Counter;