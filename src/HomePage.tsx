import FooterItself from "./FooterItself";
import Home from "./Home";
import Navbar from "./Navbar";
import NavbarBlack from "./NavbarBlack";
import NewArrivals from "./NewArrivals";
import Rights from "./Rights";
import Sponsor from "./Sponsor";
import Styles from "./Styles";
import FooterInputs from "./FooterInputs";
import { Navigate } from 'react-router-dom';
import { selectUser } from "./store/features/userSlice";
import { useSelector } from "react-redux";

type Props = {

};

function HomePage({}: Props) {
  const user = useSelector(selectUser);
  if(!user){
    return <Navigate to="/register" />
  }
  return (
    <div>
      <NavbarBlack />
      <Navbar />
      <Home />
      <Sponsor />
      <NewArrivals />
      <Styles />
      <FooterInputs />
      <FooterItself />
      <Rights />
    </div>
  );
}

export default HomePage;
