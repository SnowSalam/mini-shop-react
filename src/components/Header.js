import ContactsButton from "./ContactsButton";
import ShopLogo from './images/ShopLogo.png';
import LongImage from './images/pexels-stephanthem-753876.jpg'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import './styles/Header.css';

function Header() {

    return (
        <header>
            <div className="part-top">
                <div className="area-menu">
                    <a href='#'>Оплата</a>
                    <a href='#'>Доставка</a>
                    <a href='#'>Возврат</a>
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
                    <img src={LongImage} alt="long image" />
                </div>
                <div className="area-controls">
                    <a href='#'><CgProfile className="control-icon"/></a>
                    <a href='#'><FaRegHeart className="control-icon"/></a>
                    <a href='#'><GrBasket className="control-icon"/></a>
                </div>
            </div>
        </header>
    );
}

export default Header;