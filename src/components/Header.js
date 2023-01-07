import React from "react"
import './header.scss';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { Dropdown } from "react-bootstrap";


const Header = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  
  return(
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <AddBusinessIcon fontSize="large"/>&nbsp;
          <span className="header__logoName">Book-SHOP</span>
        </Link>
      </div>
      <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        
        <div className="header__nav__itemBasket">
         
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small"/>&nbsp;{data.cartList?.length}&nbsp;Cart
          </Link>
          
        </div>
      </div>
    </header>
  )
}


export default Header;