import { useState } from "react";

export default function MyCar(){
    const [car, setCar] = useState({year:2024,
                                    make:"Ford",
                                    model: "Mustang"
    });

    const handleYearChange = (e) => setCar(c => ({...c,year:e.target.value}) );

    const handleMakeChange = (e) => setCar(c => ({...c,make:e.target.value}) );

    const handleModelChange = (e) => setCar(c => ({...c,model:e.target.value}) );

    return (<div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={ car.year} onChange={handleYearChange}/>
                <input type="text" value={ car.make} onChange={handleMakeChange}/>
                <input type="text" value={ car.model} onChange={handleModelChange}/>
            </div>);
} 

export function UpdateArray() {
    const[foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";     
        
        setFoods(f => [...f , newFood]);

    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (<div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>)

}
