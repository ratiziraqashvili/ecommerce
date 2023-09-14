import Main from "./images/mianmain.jpg"

type Props = {};

function Home({}: Props) {
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };
  return (
    <div className="bg-[#F2F0F1] md:pt-16 md:pl-16 md:pr-16 sm:p-5 p-[0.9rem] flex flex-col justify-around gap-10 lg:gap-0 lg:flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="font-[heavy] lg:text-[64px] lg:w-[700px] sm:w-[500px] w-[305px] text-[36px] leading-none">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <span
          style={customFontStyle}
          className="font-[200] text-[14px] md:w-[540px]"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </span>
        <br />
        <a href="#topsell">
        <button className="bg-black text-white rounded-full py-3 cursor-pointer w-full md:w-[210px]">
          Shop Now
        </button>
        </a>
        <div className="sm:flex gap-12 hidden">
          <span style={customFontStyle} className="text-[40px] font-bold">
            200+
            <p className="text-[16px] font-light">International Brands</p>
          </span>
          <span style={customFontStyle} className="text-[40px] font-bold">
            2,000+
            <p className="text-[16px] font-light">International Brands</p>
          </span>
          <span style={customFontStyle} className="text-[40px] font-bold">
            30,000+
            <p className="text-[16px] font-light">International Brands</p>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-auto min-w-[280px] object-contain" src={Main} alt="" />
      </div>
    </div>
  );
}

export default Home;
