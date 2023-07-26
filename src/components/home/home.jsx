import { useEffect } from "react"
import Footer from "../footer/footer"
import Aep from "./AEP package/aep"
import AepInfo from "./AEP package/aepinfo"
import AgensSql from "./agensSql/agensSql"
import DbEngine from "./dbEngine/dbEngine"
import KeyFeatures from "./keyFeatures/keyFeatures"
import Navbar from "./navbar/navbar"
import { useNavigate } from "react-router-dom"
import MobileNav from "./navbar/mobileNav/mobileNav"

const Home = () =>{
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(localStorage.getItem("isAuthenticated") != "true"){
            navigate("/signin")
        }
    },[])

    return(
        <div>
        {/* <Navbar></Navbar> */}
        <MobileNav></MobileNav>
        <AgensSql></AgensSql>
        <Aep></Aep>
        <KeyFeatures></KeyFeatures>
  
        <DbEngine></DbEngine>
        <AepInfo></AepInfo>
        <Footer></Footer>
        </div>
    )
}

export default Home;