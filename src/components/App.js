import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import CategoryMenu from './CategoryMenu.js';
import ProductList from './ProductList.js';
import CartModal from './CartModal.js';

import './styles/App.css';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        fetch('/data/categories.json')
        .then((res) => res.json())
        .then(setCategories)
        .catch(console.error);
    }, []);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className='app-layout'>
            <Header onCartClick={() => setCartOpen(true)} />
            <CartModal cart={cart} isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

            <div className='content'>
                <aside>
                    <CategoryMenu
                        categories={categories}
                        selected={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </aside>

                <main>
                    <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />
                </main>
                
            </div>
            
        </div>
    )
}

export default App;