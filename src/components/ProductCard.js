import './styles/ProductCard.css'

function ProductCard({ product, onAddToCart }) {

    return (
        <div className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price} ₸</p>
            <button type="button" onClick={() => onAddToCart(product)} className="product-tocart-button">В корзину</button>
        </div>
    );
};

export default ProductCard;