import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CardData } from "./types/type";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/features/cartSlice";
import { fetchData } from "./fetchProducts";

type NewCardProps = {};

function NewCard({}: NewCardProps) {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const selectedStyle = useSelector((state: any) => state.style);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const data = await fetchData(selectedStyle);
        setCardsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchDatas();
  }, [selectedStyle]);

  const handleAddToCart = (card: any) => {
    dispatch(addToCart(card));
  };

  if (isLoading) {
    return (
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    );
  }

  return (
    <>
      {cardsData?.map((card, index) => (
        <div key={card.id} className="transform transition-transform hover:scale-105">
          <div className="flex flex-col justify-center items gap-4">
            <div className="bg-white p-10  md:w-[300px]  h-[295px] flex justify-center rounded-2xl">
              <img
                className="w-[230px] object-contain cursor-pointer"
                src={card.image}
                alt=""
              />
            </div>
            <p
              style={customFontStyle}
              className="text-[20px] font-bold w-[300px] cursor-pointer"
            >
              {card.title}
            </p>
            <img
              className="w-[30px]"
              src="https://upload.wikimedia.org/wikipedia/donate/thumb/4/44/YellowStar.svg/2155px-YellowStar.svg.png"
              alt=""
            />
            <span
              style={customFontStyle}
              className="font-bold text-[21px] cursor-pointer"
            >
              ${card.price}
            </span>
            <button
              className="bg-black hover:bg-zinc-900 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleAddToCart(card)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewCard;
