import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import WellcomeBanner from './images/pexels-suzyhazelwood-2309235.jpg';
import './styles/Main.css';

function Main({ selectedCategory }) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        if (!selectedCategory) return;

        const filePath = `/data/${selectedCategory.file}`;
        fetch(filePath)
        .then((res) => res.json())
        .then(setProduct)
        .catch(console.error);
    }, [selectedCategory]);

    return (
        <div className="main-layout">
            {
                !selectedCategory ? (
                    <>
                        <img className="wellcome-banner" src={WellcomeBanner} alt="Wellcome"></img>
                    </>
                ) : (
                    <>
                        <h2>{selectedCategory.name}</h2>
                        <div className="products">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Main;