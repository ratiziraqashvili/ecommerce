import CartCard from "./CartCard";
import Navbar from "./Navbar";
import NavbarBlack from "./NavbarBlack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FooterInputs from "./FooterInputs";
import FooterItself from "./FooterItself";
import { useSelector } from "react-redux";
import { CartItem } from "./store/features/cartSlice";
import { Link, Navigate } from "react-router-dom";
import { selectUser } from "./store/features/userSlice";

type Props = {};

function Cart({}: Props) {
  const user = useSelector(selectUser);
  const cart = useSelector((state: any) => state.cart)
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const subtotal = cart.cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.cartQuantity,
    0
  );

  const deliveryFee = 15; 
  const total = subtotal + deliveryFee;

  if(!user){
    return <Navigate to="/register" />
  }
  return (
    <>
      <NavbarBlack />
      <Navbar />
      <div className="">
        <h1 className="font-[heavy] text-3xl pt-7 border-t-[1px] ml-6">
          Your Cart
        </h1>
        <div className="ml-6 mr-6 lg:flex lg:items-center gap-6">
          <div className="border-[1px] rounded-2xl mt-5 flex flex-col flex-[60%]">
            {cart.cartItems.length === 0 ? (
              <div className="text-center flex flex-col justify-center items-center gap-4">
                <h1 className="font-[heavy] text-3xl pt-7 border-t-[1px] ml-6">
                  Your Cart is Empty
                </h1>
                <Link to='/'>
                <p style={customFontStyle} className="font-semibold text-blue-500">Start Shopping Here</p>
                </Link>
              </div>
            ) : (
              <>
                {cart.cartItems.map((item: any) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    quantity={item.cartQuantity}
                    category={item.category}
                  />
                ))}
              </>
            )}
          </div>
          <div className="p-4 lg:pt-10 lg:pb-10 mt-5 border-[1px] rounded-2xl flex flex-col flex-[40%] align-center h-full gap-4 lg:gap-10">
            <div>
              <h1 style={customFontStyle} className="font-bold text-lg lg:text-xl">
                Order Summary
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span style={customFontStyle} className="font-[300] lg:text-lg">
                  Subtotal
                </span>
                <span style={customFontStyle} className="font-bold lg:text-lg">
                ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b-[1px] pb-5">
                <span style={customFontStyle} className="font-[300] lg:text-lg">
                  Delivery Fee
                </span>
                <span style={customFontStyle} className="font-bold lg:text-lg">
                ${deliveryFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span style={customFontStyle} className="font-bold lg:text-xl">
                  Total
                </span>
                <span style={customFontStyle} className="font-bold text-lg lg:text-xl">
                ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              <button
                style={customFontStyle}
                className="bg-black text-white w-full py-3 rounded-full hover:bg-zinc-900"
              >
                Go to Checkout
                <ArrowForwardIcon className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterInputs />
      <FooterItself />
    </>
  );
}

export default Cart;
