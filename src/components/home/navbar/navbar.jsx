import { Link } from 'react-router-dom';
import BlueButton from '../../resusable/button/blueButtonLink';
import './navbar.css'

const Navbar = () => {
  const deleteLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  }


    return(
        <div className="navbar_container">
            <div className="navbar_left">
                <div className="nav_logo">
                    <img className='nav_image' src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png" alt="" />
                </div>
            </div>
            <div className="navbar_right">
                    <ul className='nav_items'>
                        <li className="dropdown_parent dropdown_parent_product">
                            <a href="#" className="active">PRODUCT</a>
                            <ul className="dropdown">
                                <li className="sub_dropdown_parent ">
                                    <a href="#">Graph Database &nbsp;  &#8594;</a>
                                    <ul className="sub_dropdown">
                                        <li><a >Agens</a></li>
                                        <li><a >Apache</a></li>
                                        <li><a >Ag cloud</a></li>
                                        <li><a > Visualization</a></li>


                                    </ul>
                                </li>

                                <li className="sub_dropdown_parent">
                                    <a href="#">Relational Database &#8594;</a>
                                    <ul className="sub_dropdown">
                                        <li><a href="">AgensSQL</a></li>
                             


                                    </ul>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="nav_space"> <a href="">USE CASES</a> </li>
                        <li className="nav_space" > <a href="">SERVICES</a> </li>
                        <li className="nav_space dropdown_parent dropdown_parent_resources" > <a href="">RESOURCES</a>
                        <ul className="dropdown">
                                <li className="sub_dropdown_parent">
                                    <a href="#">Documentation</a>
                                    </li>
                                    <li className="sub_dropdown_parent">
                                    <a href="#">Learn</a>
                                    </li>
                                    </ul>
                         </li>
                        <li className="nav_space" > <a href="">BLOG</a> </li>
                       
                        <li className="nav_space dropdown_parent dropdown_parent_resources" > <a href="">COMPANY</a>
                        <ul className="dropdown">
                                <li className="sub_dropdown_parent">
                                    <a href="#">About Us</a>
                                    </li>
                                    <li className="sub_dropdown_parent">
                                    <a href="#">Contact</a>
                                    </li>
                                    </ul>
                            
                         </li>          <li className='BlueButton'> 
                          <BlueButton classname={"nav_delete"} text={"Delete Data"} handleClick={deleteLocalStorage}></BlueButton>
                          
                        </li>
                    </ul>
            </div>
        </div>



/* <div className="nav_container">
  <ul>
    <li class="dropdown-parent">
      <a href="#" class="active">Products &#8595;</a>
      <ul class="dropdown">
        <li class="sub-dropdown-parent">
          <a href="#">Graph Database &#8594;</a>
          <ul class="sub-dropdown">
            <li><a href="#">Name</a></li>
            <li><a href="#">Age</a></li>
          </ul>
        </li>
        <li><a href="#">Relational Database &#8594;</a></li>
      </ul>
    </li>
    <li class="dropdown-parent">
      <a href="#">Use Cases &#8595;</a>
      <ul class="dropdown">
        <li><a href="#">How</a></li>
        <li><a href="#">Why</a></li>
      </ul>
    </li>
  </ul>
  </div>   
   ) */

    )
}

export default Navbar;