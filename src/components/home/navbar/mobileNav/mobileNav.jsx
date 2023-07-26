import { useState } from "react";
import "./mobileNav.css";
import {FaBars} from 'react-icons/fa'
const MobileNav = () => {
  const [classNmae, setclassName] = useState("mobilenav_list_not_active");
  const toggle = () => {
    if (classNmae === "mobilenav_list_not_active") {
      setclassName("mobilenav_list_active");
    } else {
      setclassName("mobilenav_list_not_active");
    }
  };
  return (
    <div className="mobilenav_container">
        <div className="mobilenav_head">
            <div className="mobilenav_logo">
                <img src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" alt="" />
            </div>
            <div className="mobilenav_button">
                <a onClick={toggle}> <FaBars></FaBars> </a>
                
            </div>
        </div>
      <ul className={classNmae}>
        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">PRODUCTS</a>
          <ul className="mobilenav_sub_1">
            <li>
              <a>Graph Database</a>
            </li>
            <li>
              <a>Relational Database</a>
            </li>
          </ul>
        </li>

        <hr></hr>
        <li>Use Cases</li>
        <hr></hr>

        <li>Services</li>
        <hr></hr>

        <li className="mobilenav_dropdown_parent">
          {" "}
          <a className="mobilenav_dropdown_parent_text">Resources</a>
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

        <li>Blog</li>
        <hr></hr>
        <li className="mobilenav_dropdown_parent">
          <a className="mobilenav_dropdown_parent_text">Company</a>
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
          <a className="mobilenav_dropdown_parent_text"> IR</a>
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
      </ul>
    </div>
  );
};

export default MobileNav;
