import logo from "/public/images/icons/logo (1).png";
import UserAccButton from "./modules/UserAccButton/UserAccButton";
import defaultNavbarItems from "../../mock/defaultNavbarItems";
import { Link, NavLink } from "react-router";

function DefualtHeader() {
  return (
    <>
      <div className="container m-auto flex justify-between p-5 ">
        <Link href="/" className="hoverscale">
        <img src={logo} alt="logo" />
        </Link>
        <div className="flex justify-around items-center font-extrabold">
        {defaultNavbarItems.map(item => (  
          <NavLink   
            key={item.id}          
            to={item.href}      
            className="nav-link mx-3 text-black hoverscale"  
           
          >  
            {item.title}        
          </NavLink>  
        ))}  
        </div>
        <Link href="/auth">
        
        <UserAccButton />
        
        </Link>
      </div>
    </>
  );
}

export default DefualtHeader;
