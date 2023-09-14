import calvin from "./images/calvin.svg";
import gucci from "./images/gucci.svg";
import prada from "./images/prada.svg";
import versace from "./images/versace.svg";
import zara from "./images/zara.svg";

type Props = {};

function Sponsor({}: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-evenly items-center bg-black py-10">
      <div>
        <img className="w-[150px]" src={versace} alt="Versace" />
      </div>
      <div>
        <img className="w-[90px]" src={zara} alt="Zara" />
      </div>
      <div>
        <img className="w-[150px]" src={gucci} alt="Gucci" />
      </div>
      <div>
        <img className="w-[150px]" src={prada} alt="Prada" />
      </div>
      <div>
        <img className="w-[150px]" src={calvin} alt="Calvin Klein" />
      </div>
    </div>
  );
}

export default Sponsor;
