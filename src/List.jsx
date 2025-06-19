 import PropTypes from "prop-types";
 export default function List() {
    const fruits = [{id: 1, name:"Apple", cal: 45},
                    {id: 2, name:"Banana", cal: 65},
                    {id: 3, name:"Coconut", cal: 85}, 
                    {id: 4, name:"Oranges", cal: 60}]; 

    const lowCalFruits = fruits.filter(fruit => fruit.cal < 85);     
     
    const fruitItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                {lowCalFruit.name}:&nbsp;
                                                <b>{lowCalFruit.cal}</b></li>);
    

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}:&nbsp;
                                                <b>{fruit.cal}</b></li>);
    return (<ol>{listItems}<br></br>
                {fruitItems}
            </ol>);
}  


export function Lost(props) {
    const cal = props.cal;

    const itemLost = props.items;

    const lostItems = itemLost.map(item => <li key={item.id}>
                                                {item.name}:&nbsp;
                                                <b>{item.cal}</b></li>);

    return (<>   
                <h3 className="lost-cal">{cal}</h3>
                <ol className="lost-item">{lostItems}</ol>
            </>);
}

Lost.propTypes = {
    cal: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        cal: PropTypes.number 
    })),
}
Lost.defaultProps = {
    cal: "cal",
    items: [],
}  