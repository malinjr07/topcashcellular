import React from 'react'
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
    return ( <> 
        <a href="/" className="promotion top-fix green">
            <p>Get 5% extra bonus.</p>
        </a>
        <Header/>
        <a href="/" className="promotion grey">
            <p>Get 5% extra bonus.</p>
        </a>
        <Banner/>
        
    </>
    )
}

export default Home