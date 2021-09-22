import React from 'react'
import "./main.css";
import {category} from '../../dummy-data/data' 
import { Link, Route, useRouteMatch} from 'react-router-dom';

function Category() {
    const {path, url}=useRouteMatch();
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
                           <Link to={`/${url}/${item.slug}`} className="category-item">
                              <img src="vendor/img/samsung.png" className="img-fluid" alt="samsung.png" />
                              {/* <img src={item.} className="img-fluid" alt="samsung.png" /> */}
                              <span className="category-title">
                               {item.title}
                              </span>
                          </Link>
                       </div>
                        
                        )
                    }
                </div>
            </div>
            <Route path={`${path}/:slug`}>
                <Category/>
            </Route>
        </section>

    )
}

export default Category
