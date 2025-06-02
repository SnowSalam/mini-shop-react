import ContactsButton from "./ContactsButton";
import ShopLogo from './images/ShopLogo.png';
import LongImage from './images/pexels-stephanthem-753876.jpg'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import './styles/Header.css';

function Header({ onCartClick }) {

    return (
        <header>
            <div className="part-top">
                <div className="area-menu">
                    <a href='#root'>Оплата</a>
                    <a href='#root'>Доставка</a>
                    <a href='#root'>Возврат</a>
                </div>
                <div className="area-contacts">
                    <ContactsButton />
                </div>
            </div>
            <div className="part-main">
                <div className="area-logo">
                    <img src={ShopLogo} alt="logo"></img>
                    <span>ShopName</span>
                </div>
                <div className="area-longimg">
                    <img src={LongImage} alt="long" />
                </div>
                <div className="area-controls">
                    <a href='#root'><CgProfile className="control-icon"/></a>
                    <a href='#root'><FaRegHeart className="control-icon"/></a>
                    <button onClick={onCartClick} className="control-icon-button">
                        <GrBasket className="control-icon" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;