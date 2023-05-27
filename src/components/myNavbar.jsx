import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './myNavbar.css';

export const MyNavbar = () => {
  return (
    <div className="myNavbar">
      <div className="myLinks">
        <Link to={'/'}> Beer </Link>
        <Link to={'/cart'}> <ShoppingCart size={32}/> </Link>
      </div>
    </div>
  )
}
