import React from 'react'
import Banner from "../components/Banner";
import HowItWorks from "../components/How-it-work";
import Category from "../components/Category";
import WhyUs from "../components/Why-Us";

function Home() {
    return ( <> 
        <Banner/>
        <HowItWorks/>
        <Category/>
        <WhyUs/>
    </>
    )
}

export default Home