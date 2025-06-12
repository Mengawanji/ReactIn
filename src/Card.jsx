import prof from "./assets/google.png"
function Card () {
    return(
        <div className="card">
            <img src={prof} alt="Profile pic" />
            <h2 className="card-title">The Web Genius</h2>
            <p className="card-text">I write code and develop high functional and responsive webApp</p>
        </div>
    )

}

export default Card