import { useState } from 'react';
import styles from './Button.module.css'
function Button() {
    return(
        <button className={styles.btn}> Click Me</button>
    )

}
export default Button
    


export function Press () {

    const handlePress = (e) => e.target.textContent = "OUTCH";

    return (<button onClick={(e)=> handlePress(e) }> Click here</button>)

} 