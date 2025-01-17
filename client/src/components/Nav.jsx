import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/">
              <GoHome />
              {/* <br />
              Home */}
            </Link>
          </li>
          <li>
            <Link to="/collection">
              <VscLibrary />
              {/* <br />
              Collection */}
            </Link>
          </li>
          <li>
            <Link>
            <VscAccount />
            </Link>
          </li>
        </ul>
      </nav>
      {/* <nav>
      <button>Sign up</button>
      <button>Log in</button>
    </nav> */}
    </>
  );
}

export default Nav