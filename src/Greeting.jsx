function Greeting(props) {
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }else{
        return <h2>Log In</h2>
    }  
} 
export default Greeting