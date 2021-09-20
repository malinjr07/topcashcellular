import React from 'react'
import "./main.css";
import {steps} from '../../dummy-data/data'
function HowItWorks() {
    return (
        <section className="how-it-works section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <h3 className="main-title">
                            Get Cash in Three Simple Steps
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="row d-flex justify-content-center">
                            {
                                steps.map((item, i) =>
                                <div className="col-md-4 col-sm-6" key={i}>
                                <div className="steps">
                                    <div className="icon">
                                        <img
                                            src="vendor/img/1-how-it-works.png"
                                            alt="how-it-works"
                                            className="img-fluid" />
                                    </div>
                                    <div className="text-area text-center">
                                        <div className="title">
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className="text">
                                            <p>{item.details}</p>
                                        </div>
                                    </div>
                                    <div className="forward">
                                        <i className="fas fa-reply" />
                                    </div>
                                </div>
                            </div>
                                
                                )
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HowItWorks
