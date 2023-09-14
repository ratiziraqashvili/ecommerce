import Casual from "./images/image 111.png";
import Formal from "./images/image 13.png";
import Party from "./images/image 12.png";
import Gym from "./images/image 14.png";
import { useDispatch } from "react-redux";
import { setStyle } from "./store/features/categorySlice";

type Props = {};

function Styles({}: Props) {
  const dispatch = useDispatch();
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const handleStyleClick = (style: string) => {
    dispatch(setStyle(style));
  };

  return (
    <div className="bg-[#f2f0f1] py-10 ml-10 mr-10 mt-16 rounded-3xl">
      <h1 className="font-[heavy] text-[20px] lg:text-[22px] 2xl:text-[30px] text-center mb-6">
        BROWSE BY dress STYLE
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 2xl:gap-9">
        <div
          className="bg-white ml-6 mr-6 rounded-3xl cursor-pointer flex justify-between md:h-[200px] 2xl:h-[300px] 2xl:w-[500px] transform transition-transform hover:scale-105"
          onClick={() => handleStyleClick("men's%20clothing")}
        >
          <span
            style={customFontStyle}
            className="text-[15px] font-bold pl-3 flex-start md:text-[26px] 2xl:text-[29px] md:p-6 z-20"
          >
            Men's Clothing
          </span>
          <img
            className="w-[100px] md:w-[210px] 2xl:w-[316px] rounded-3xl object-contain"
            src={Casual}
            alt="Casual"
          />
        </div>
        <div
          className="bg-white ml-6 mr-6 rounded-3xl cursor-pointer flex justify-between md:h-[200px] 2xl:h-[300px] 2xl:w-[500px] transform transition-transform hover:scale-105"
          onClick={() => handleStyleClick("electronics")}
        >
          <span
            style={customFontStyle}
            className="text-[15px] font-bold pl-3 flex-start md:text-[26px] md:p-6 z-20"
          >
            Electronics
          </span>
          <img
            className="w-[100px] md:w-[216px] 2xl:w-[323px] rounded-3xl object-contain"
            src={Formal}
            alt="Casual"
          />
        </div>
        <div
          className="bg-white ml-6 mr-6 rounded-3xl cursor-pointer flex justify-between md:h-[200px] 2xl:h-[300px] 2xl:w-[500px] transform transition-transform hover:scale-105"
          onClick={() => handleStyleClick("women%27s%20clothing")}
        >
          <span
            style={customFontStyle}
            className="text-[15px] font-bold pl-3 flex-start md:text-[26px] md:p-6 z-20"
          >
            Women's Clothing
          </span>
          <img
            className="w-[110px] md:w-[250px] 2xl:w-[375px] rounded-3xl object-contain"
            src={Party}
            alt="Casual"
          />
        </div>
        <div
          className="bg-white ml-6 mr-6 rounded-3xl cursor-pointer flex justify-between md:h-[200px] 2xl:h-[300px] 2xl:w-[500px] transform transition-transform hover:scale-105"
          onClick={() => handleStyleClick("jewelery")}
        >
          <span
            style={customFontStyle}
            className="text-[15px] font-bold pl-3 flex-start md:text-[26px] md:p-6 z-20"
          >
            Jewelery
          </span>
          <img
            className="w-[110px] md:w-[254px] 2xl:w-[380px] rounded-3xl object-contain"
            src={Gym}
            alt="Casual"
          />
        </div>
      </div>
    </div>
  );
}

export default Styles;
