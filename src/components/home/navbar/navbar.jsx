import { Link } from "react-router-dom";
import BlueButton from "../../resusable/button/blueButtonLink";
import logo from "../../../assets/b_logo.png"
import "./navbar.css";

const Navbar = () => {
  const deleteLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <div className="nav_logo">
          <img
            className="nav_image"
            src = {logo}
            alt=""
          />
        </div>
      </div>
      <div className="navbar_right">
        <ul className="nav_items">
          <li className="dropdown_parent dropdown_parent_product">
            <a href="#" className="active">
              PRODUCT
            </a>
            <ul className="dropdown">
              <li className="sub_dropdown_parent ">
                <a href="#">Graph Database &nbsp; &#8594;</a>
                <ul className="sub_dropdown">
                  <li>
                    <a>Agens</a>
                  </li>
                  <li>
                    <a>Apache</a>
                  </li>
                  <li>
                    <a>Ag cloud</a>
                  </li>
                  <li>
                    <a> Visualization</a>
                  </li>
                </ul>
              </li>

              <li className="sub_dropdown_parent">
                <a href="#">Relational Database &#8594;</a>
                <ul className="sub_dropdown">
                  <li>
                    <a href="">AgensSQL</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav_space">
            <a href="">USE CASES</a>
          </li>
          <li className="nav_space">
            
            <a href="">SERVICES</a>
          </li>
          <li className="nav_space dropdown_parent dropdown_parent_resources">
            <a href="">RESOURCES</a>
            <ul className="dropdown">
              <li className="sub_dropdown_parent">
                <a href="#">Documentation</a>
              </li>
              <li className="sub_dropdown_parent">
                <a href="#">Learn</a>
              </li>
            </ul>
          </li>
          <li className="nav_space">
            <a href="">BLOG</a>
          </li>
          <li className="nav_space dropdown_parent dropdown_parent_resources">
          
            <a href="">COMPANY</a>
            <ul className="dropdown">
              <li className="sub_dropdown_parent">
                <a href="#">About Us</a>
              </li>
              <li className="sub_dropdown_parent">
                <a href="#">Contact</a>
              </li>
            </ul>
          </li>
          <li className="BlueButton">
            <BlueButton
              classname={"nav_delete"}
              text={"Delete Data"}
              handleClick={deleteLocalStorage}
            ></BlueButton>
          </li>
        </ul>
      </div>
    </div>

   
  );
};

export default Navbar;
