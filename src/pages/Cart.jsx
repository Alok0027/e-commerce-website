import { useCart } from "../context/Cartcontext";
import { Link } from "react-router-dom";
import Smallay from '../components/Smallay';

const Cart = () => {
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();

  return (
    <Smallay>
    <div className="bg-[#f9f9f9] min-h-screen p-8">
      <h1 className="text-3xl font-medium text-center mb-10 font-mono"> Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-black text-white uppercase text-sm rounded-md"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow-md"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-medium text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500">Rs. {item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 border border-gray-300 text-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 border border-gray-300 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6 text-right">
            <p className="text-lg mb-2 font-medium">
              Total: Rs. {total.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Tax included and shipping calculated at checkout
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </Smallay>
  );
};

export default Cart;
