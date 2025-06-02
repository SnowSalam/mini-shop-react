import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import './styles/CartModal.css';

function CartModal({ cart, isOpen, onClose }) {
    if (!isOpen) return null;

    const grouped = cart.reduce((acc, item) => {
    const key = item.id;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 0 };
        }
        acc[key].quantity++;
        return acc;
    }, {});

    const items = Object.values(grouped);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <h2>Корзина</h2>
                <button className='cart-modal-close-button' onClick={onClose}><AiOutlineClose className='close-button-icon'/></button>
                <ul className='cart-list'>
                    {items.map(item => (
                        <li key={item.id} className='cart-list-element'>
                            {item.name} × {item.quantity} — {item.price * item.quantity} ₸
                        </li>
                ))}
                </ul>
                <hr />
                <p className='cart-sum'>Итого: {total} ₸</p>
                <button className='cart-modal-buy-button'>Купить</button>
            </div>
        </div>
  );
}

export default CartModal;