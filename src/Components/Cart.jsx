import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../Redux/Slices/CardSlices";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate()

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed right-0 top-0 bg-white h-screen shadow-lg rounded-l-md lg:w-1/5 md:w-full">
          <div className="flex justify-between pr-3 pt-3 mb-6">
            <span className="text-center ml-6 text-2xl font-semibold">
              My Orders
            </span>
            <MdCancel
              className="text-3xl cursor-pointer"
              onClick={toggleCart}
            />
          </div>
          <hr />

          {cartItems.length === 0 ? (
            <h2 className="text-center text-2xl mt-2">Your Cart is Empty</h2>
          ) : (
            <>
              {cartItems.map((food) => (
                <ItemCard key={food.id} {...food} />
              ))}
            </>
          )}

          <div className="absolute bottom-5 ml-3 mr-3">
            <h3 className="text-2xl font-semibold">
              Items: {cartItems.length}
            </h3>
            <h3 className="text-2xl font-semibold">
              Total amount: ₹{totalPrice}
            </h3>
            <hr />
            <button className="bg-[#FC6736] w-[20vw] h-[5vh] text-2xl text-white rounded-md hover:bg-red-600 transition-all duration-300"
            onClick={() => navigate('/success')}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {isCartOpen || (
        <FaShoppingCart
          className="rounded-full bg-white border-2 border-[#FC6736] text-[#FC6736] text-5xl p-3 cursor-pointer fixed top-3 right-3 transition-transform transform hover:scale-110"
          onClick={() => setCartOpen(true)}
        />
      )}
    </>
  );
};

export default Cart;


