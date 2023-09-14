import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeFromCart } from './store/features/cartSlice';

interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
 title: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

function CartCard({ id, category, title, price, image, quantity}: CartCardProps) {
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const dispatch = useDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <div className="flex justify-evenly items-center gap-5 md:gap-3  p-3 border-b-[1px] h-auto">
        <div>
          <img
            className="w-[150px] md:w-[250px] lg:w-[280px] min-w-[80px] object-contain h-full "
            src={image}
          />
        </div>
        <div className="flex flex-col md:gap-4">
          <div className="flex flex-col md:gap-3">
            <h1 style={customFontStyle} className="font-bold sm:text-xl md:text-2xl max-w-[300px]">
              {title}
            </h1>

            <p
              style={customFontStyle}
              className="font-semibold text-[14px] sm:text-[17px] md:text-[20px]"
            >
              Category:{" "}
              <span className="font-[300] text-[12px] sm:text-[14px] md:text-[17px]">
                {category}
              </span>
            </p>
            <p
              style={customFontStyle}
              className="font-semibold text-[14px]  sm:text-[17px] md:text-[20px]"
            >
              Quantity:{" "}
              <span className="font-[300] text-[12px] sm:text-[14px] md:text-[17px]">
                {quantity}
              </span>
            </p>
          </div>
          <div>
            <div
              style={customFontStyle}
              className="font-bold text-lg sm:text-2xl md:text-3xl"
            >
             ${price}
            </div>
          </div>
          <div className="flex justify-start">
            <DeleteIcon onClick={handleRemoveFromCart} className="text-red-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;