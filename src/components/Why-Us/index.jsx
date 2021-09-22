import React from 'react'
import "./main.css";
import {whyUs} from "../../dummy-data/data"

function WhyUs() {
    return (
        <section className="why-us section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="main-title">
                            <h3>
                                Why Us
                            </h3>
                            <h4 className="mini-title">
                                Choose the best reason to Sell
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">

             {
                whyUs.map((item,i)=>
                    <div className="col-md-3 col-sm-6" key={i}>
                            <div className="steps">
                            <div className="icon">
                                <img src="vendor/img/1-why-us.png" alt="why-us" className="img-fluid" />
                                {/* <img src={item.icon} alt="why-us" className="img-fluid" /> */}
                            </div>
                            <div className="text-area text-center">
                                <div className="title">
                                    <h5>{item.title}</h5>
                                </div>
                            <div className="text">
                                <p>{item.details}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                     )
                }
                       
                    {/* <div className="col-md-3 col-sm-6">
                        <div className="steps">
                            <div className="icon">
                                <img src="vendor/img/1-why-us.png" alt="why-us" className="img-fluid" />
                            </div>
                            <div className="text-area text-center">
                                <div className="title">
                                    <h5>QUICK PAYMENTS</h5>
                                </div>
                                <div className="text">
                                    <p>Get paid instantly via PayPal, eChecks or have a check sent out right away to
                                        you. Your choice.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="steps">
                            <div className="icon">
                                <img src="vendor/img/1-why-us.png" alt="why-us" className="img-fluid" />
                            </div>
                            <div className="text-area text-center">
                                <div className="title">
                                    <h5>QUICK PAYMENTS</h5>
                                </div>
                                <div className="text">
                                    <p>Get paid instantly via PayPal, eChecks or have a check sent out right away to
                                        you. Your choice.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="steps">
                            <div className="icon">
                                <img src="vendor/img/1-why-us.png" alt="why-us" className="img-fluid" />
                            </div>
                            <div className="text-area text-center">
                                <div className="title">
                                    <h5>QUICK PAYMENTS</h5>
                                </div>
                                <div className="text">
                                    <p>Get paid instantly via PayPal, eChecks or have a check sent out right away to
                                        you. Your choice.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default WhyUs
