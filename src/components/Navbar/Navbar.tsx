import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Tablet from "./Tablet";


const Navbar = () => {
  return (
    <>
      <Mobile />
      <Tablet />
      <Desktop/>
    </>
  );
};

export default Navbar;
