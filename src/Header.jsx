import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <>
          <nav style={{ display: 'flex', gap: '1.5rem',}}>
            <Link to="/">Home</Link>
            <Link to="/Todo">Todo-App</Link>
            <Link to="/CardDisplay">User</Link>
            <Link to="/ColorPicker">Color</Link>
            <Link to="/Ref">Reference</Link>
            <Link to="/CarDetail">CarDetails</Link>
            <Link to="/Master">Counter</Link>
            <Link to="/Clock"> Time</Link>
          </nav>
          <Outlet/>
        </>
    );
}  

export default Header