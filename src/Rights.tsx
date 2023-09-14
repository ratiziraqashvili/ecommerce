import Visa from "./images/Visa.svg"
import MasterCard from "./images/MasterCard.svg"
import PayPal from "./images/PayPal.svg"
import Apple from "./images/Apple.svg"
import Google from "./images/Google.svg"

type Props = {}

function Rights({}: Props) {
    const customFontStyle = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
      };
  return (
    <div className='bg-[#F2F0F1] text-center flex flex-col md:flex-row gap-5 md:px-16 md:justify-between'>
        <div style={customFontStyle} className="font-thin">
            <span>
            Shop.co © 2000-2023, All Rights Reserved
            </span>
        </div>
        <div className='flex justify-center'>
            <img className='' src={Visa} alt="Visa" />
            <img src={MasterCard} alt="MasterCard" />
            <img src={PayPal} alt="PayPal" />
            <img src={Apple} alt="Apple" />
            <img src={Google} alt="Google" />
        </div>
    </div>
  )
}

export default Rights