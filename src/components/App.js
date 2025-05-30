import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import CategoryMenu from './CategoryMenu.js';
import Main from './Main.js';
import './styles/App.css';

function App() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('/data/categories.json')
        .then((res) => res.json())
        .then(setCategories)
        .catch(console.error);
    }, []);

    return (
        <div className='app-layout'>
            <Header />

            <div className='content'>
                <aside>
                    <CategoryMenu
                        categories={categories}
                        selected={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </aside>

                <main>
                    <Main selectedCategory={selectedCategory}  />
                </main>
                
            </div>
            
        </div>
    )
}

export default App;