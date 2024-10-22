"use client"
import { useCart } from '../../context/CartContext';
import styles from '../../styles/SalesPage.module.css'; // Using CSS Modules for scoped styling

const salesProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

const SalesPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, totalPrice, checkout } = useCart();

  return (
    <div className={styles.salesPage}>
      <h1 className={styles.heading}>Sales Page</h1>

      <div className={styles.productsContainer}>
        <h2>Available Products</h2>
        <div className={styles.productList}>
          {salesProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={`/images/product-${product.id}.jpg`}
                alt={product.name}
                className={styles.productImage}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cart}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            ))}
            <div className={styles.totalPrice}>
              <h3>Total Price: ${totalPrice}</h3>
            </div>
            <button onClick={checkout} className={styles.checkoutButton}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SalesPage;