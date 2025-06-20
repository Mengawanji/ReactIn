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


export function Compo() {
    const [name,setName] = useState ("Guest");

    const [qty, setQty] = useState ("");

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping, setShipping] = useState("");


    function handleChange(e) {
        setName(e.target.value);
    }

    const handleQty = () => setQty(e.target.value);

    function handleComment(e) {
        setComment(e.target.value)
    } 

    const handlePayment = (e) => setPayment(e.target.value);

    function handleShipping(e) {
        setShipping(e.target.value)
    } 


    return (<div>
                <input value={name} onChange={handleChange}/>
                <p>Name: {name}</p>

                <input value={name} onChange={handleQty}/>
                <p>Quantity: {qty}</p>  

                <textarea value={comment} onChange={handleComment} placeholder="Enter Comment"/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePayment}>
                    <option value="">Select an option</option>
                    <option value="VISA">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>


                <label>
                    <input type="radio" value="Pick-up" checked={shipping === "Pick-up"}  onChange={handleShipping}/>
                    Pick-up
                </label>

                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"}  onChange={handleShipping}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>);
}