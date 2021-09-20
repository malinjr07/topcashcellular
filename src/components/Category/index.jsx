import React from 'react'
import "./main.css";
import {category} from '../../dummy-data/data' 

function Category() {
    return (
        <section className="category section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="main-title">
                            <h3>
                                Let's Start Selling
                            </h3>
                            <h4 className="mini-title">
                                Find the product you'd like to trade-in for cash
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        category.map((item, i) => 
                        <div className="col-md-4 col-6 category-list" key={i}>
                           <a href="/" className="category-item">
                              <img src="vendor/img/samsung.png" className="img-fluid" alt="samsung.png" />
                              {/* <img src={item.} className="img-fluid" alt="samsung.png" /> */}
                              <span className="category-title">
                               {item.title}
                              </span>
                          </a>
                       </div>
                        
                        )
                    }
                    {/* <div className="col-md-4 col-6 category-list">
                        <a href="/" className="category-item">
                            <img src="vendor/img/samsung.png" className="img-fluid" alt="samsung.png" />
                            <span className="category-title">
                                iPhone
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4 col-6 category-list">
                        <a href="/" className="category-item">
                            <img src="vendor/img/samsung.png" className="img-fluid" alt="samsung.png" />
                            <span className="category-title">
                                iPhone
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4 col-6 category-list">
                        <a href="/" className="category-item">
                            <img src="vendor/img/samsung.png" className="img-fluid" alt="samsung.png" />
                            <span className="category-title">
                                iPhone
                            </span>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default Category
