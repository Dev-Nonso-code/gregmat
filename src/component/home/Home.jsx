import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Head from ".././common/header/Head"
import Header from ".././common/header/Header"



const Home = () => {
  return (
    <>
    
    <Head />
      <div className="sticky-top bg-warning">
        <Header />
      </div> 
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      
    </>
  )
}

export default Home
