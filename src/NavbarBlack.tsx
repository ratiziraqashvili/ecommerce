import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

type Props = {};

const NavbarBlack = (props: Props) => {
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="bg-black p-2 flex justify-between items-center">
      <p className="text-white font-[200] text-center flex-grow" style={customFontStyle}>
        Get 20% off your first order.
      </p>
      <IconButton onClick={handleClose}>
        <CloseIcon className="text-white cursor-pointer" />
      </IconButton>
    </div>
  ) : null;
};

export default NavbarBlack;
