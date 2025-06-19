import {useState} from "react";

export default function MyCompo() {

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const [isEmployed, setisEmployed] = useState(true);


    const updateName = () => {
       setName("Spongbob");   
    }

    const incAge = () => {
        setAge(age + 1);
    }

    const status = () => {
        setisEmployed(isEmployed)
    }

    return ( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incAge}>Add Age</button>

                <p>Is Employed: {isEmployed? "Yes": "No"}</p>
                <button onClick={status}>Status</button>
             </div>);
} 