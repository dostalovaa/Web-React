import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Cart Totals</h2>
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
