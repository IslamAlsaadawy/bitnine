import './footer.css'

const Footer = () => {
    return(

        <div className="footer_container">
            
                <ul className='footer_items'>
                    <li >
                        <h3>PRODUCTS</h3>
                    <ul className='footer_sub_items'>
                        <li><a href=""> Relational Database</a></li>
                        <li><a href="">Graph Database</a></li>
                        <li><a href=""> Graph-based Solution</a></li>

                    </ul>
                    </li>
                    <li><h3>USE CASES</h3></li>
                    <li><h3>SEFVICES</h3></li>
                    <li><h3>RESOURCES</h3>
                        <ul className="footer_sub_items">
                            <li> <a href="">Documentation</a></li>
                            <li> <a href="">Learn</a></li>

                        </ul>
                    </li>
                    <li><h3>BLOG</h3></li>
                    <li><h3>COMPANY</h3>
                    <ul className="footer_sub_items">
                        <li>About Us</li>
                        <li>Contact</li>

                    </ul>
                    </li>

                </ul>
            
        </div>


    )
}

export default Footer;