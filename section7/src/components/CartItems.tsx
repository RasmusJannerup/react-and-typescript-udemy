import { type CardItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {

  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const totalPrice = useCartSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  function handleRemoveFromCart(itemId: string) {
    dispatch(removeFromCart(itemId));
  }

  function handleAddToCart(item: CardItem) {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price }));
  }

  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}
      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
