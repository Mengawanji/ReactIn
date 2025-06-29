import { useEffect, useState } from "react";

export default function Master () {
    const [count, setCount] = useState(0);

    useEffect (() => {
        document.title = `Count: ${count}`
    }, )

    const addCount = () =>  setCount (c => c + 1);

    return (<div>
              <p>Count: {count}</p>
              <button onClick={addCount}>Add</button>
            </div>)
} 