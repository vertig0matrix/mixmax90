import { GoHome } from "react-icons/go";
import { VscLibrary, VscAccount } from "react-icons/vsc";


const Nav = () => {

  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <GoHome />
          </li>
          <li className="nav-item">
            <VscLibrary />
          </li>
          <li className="nav-item">
            <VscAccount />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;