import React from 'react'

function Banner() {
    return (
        <section
            className="hero-banner"
            style={{
                backgroundImage: 'url(vendor/img/hero-min.jpg.webp)'
            }}>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="main-text">
                                <h1>
                                    TRADE-IN YOUR USED ELECTRONICS
                                    <span className="light">for
                                        <span className="color-green">CASH</span>
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="mini-title">
                                <h4>The simplest and safest way to sell your old phone, tablet, or laptop online</h4>
                            </div>
                            <button className="btn green">sell your device</button>
                            <a href="/" className="feedback">
                                "Best places to sell your used electronics for 2020"
                            </a>
                            <button type="button" className="bottom-section">
                                <i className="fas fa-chevron-down" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner
