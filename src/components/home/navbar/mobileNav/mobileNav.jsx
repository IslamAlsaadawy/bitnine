import { useState } from "react";
import "./mobileNav.css";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import BlueButton from "../../../resusable/button/blueButtonLink";
const MobileNav = () => {
  const [classNmae, setclassName] = useState("mobilenav_list_not_active");
  const toggle = () => {
    if (classNmae === "mobilenav_list_not_active") {
      setclassName("mobilenav_list_active");
    } else {
      setclassName("mobilenav_list_not_active");
    }
  };

  const deleteLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="mobilenav_container">
      <div className="mobilenav_head">
        <div className="mobilenav_logo">
          <img
            src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png"
            alt=""
          />
        </div>
        <div className="mobilenav_button">
          <a onClick={toggle}>
            
            <FaBars></FaBars>
          </a>
        </div>
      </div>
      <ul className={classNmae}>
        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">
            <span className="text">PRODUCTS</span>
            <span className="icon">
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </a>
          <ul className="mobilenav_sub_1">
            <li className="mobilenav_sub_1_text">
              <a>Graph Database</a>
              <ul className="mobilenav_sub_2">
                <li>
                  <a>Agens Graph</a>
                </li>
                <li>
                  <a>Apache AGE</a>
                </li>
                <li>
                  <a>AG Cloud</a>
                </li>
                <li>
                  <a>Visualization & Analytics</a>
                </li>
              </ul>
            </li>
            <li className="mobilenav_sub_1_text">
              <a>Relational Database</a>
              <ul className="mobilenav_sub_2">
                <li>
                  <a>AgensSQL</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">USE CASES</a>
        </li>
        <hr></hr>

        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text"> SERVICES</a>
        </li>
        <hr></hr>

        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">
            <span className="text">RESOURCES</span>
            <span className="icon">
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </a>
          <ul className="mobilenav_sub_1">
            <li>
              <a> Documentation</a>
            </li>
            <li>
              <a> Learn</a>
            </li>
          </ul>
        </li>
        <hr></hr>

        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">BLOG</a>
        </li>
        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">
            <span className="text">COMPANY</span>
            <span className="icon">
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </a>
          <ul className="mobilenav_sub_1">
            <li>
              <a> About Us</a>
            </li>
            <li>
              <a> Contact</a>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">
            <span className="text">IR</span>
            <span className="icon">
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </a>
          <ul className="mobilenav_sub_1">
            <li>
              <a> Korean</a>
            </li>
            <li>
              <a> Korean</a>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li>
          <BlueButton
            classname={"mobilenav_button_delete"}
            text={"Delete Data"}
            handleClick={deleteLocalStorage}
          ></BlueButton>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
