import React, { useState, useRef, useEffect } from 'react';
import './styles/ContactsButton.css';

function ContactsButton() {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleContacts = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='contacts-button-wrapper' ref={wrapperRef}>
            <button type='button' className='contacts-button' onClick={toggleContacts} >
                Контакты
            </button>
            {isOpen && (
                <div className='contacts-popup'>
                    <p className="contacts-label">
                        Вы можете связаться с нами по электронной почте
                    </p>
                    <a className="contacts-contact" href="mailto:shop@shop.shop">
                        shop@shop.shop
                    </a>
                    <p className="contacts-label">
                        или по телефону
                    </p>
                    <a className="contacts-contact" href="tel:+00000000000">
                        +0 (000) 000 00-00
                    </a>
                </div>
            )}
        </div>
        
    );
};

export default ContactsButton;