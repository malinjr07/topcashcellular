import React from 'react'

function Carts() {
    return (
        <section className="cart section-padding">
            <div className="container">
                <div className="row border-bottom">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="main-title">
                            <h3>
                                Device You've selected
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-9 col-md-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="summary">
                                    <ul className="list-group headings list-group-horizontal">
                                        <li className="list-group-item details ">
                                            <h6>TRADE-IN DETAILS</h6>
                                        </li>
                                        <li className="list-group-item items">
                                            <h6>QUANTITY</h6>
                                        </li>
                                        <li className="list-group-item price">
                                            <h6>ITEM VALUE</h6>
                                        </li>
                                    </ul>
                                    <ul className="products">
                                        <li className="single-products">
                                            <ul className="list-group items-list list-group-horizontal">
                                                <li className="list-group-item details ">
                                                    <div className="product-details">
                                                        <div className="product-img">
                                                            <img src="vendor/img/iphone.png" className="img-fluid" alt="iphone.png"/>
                                                        </div>
                                                        <div className="specs">
                                                            <h6>Galaxy S21 Ultra</h6>
                                                            <p>Brand New, AT&amp;T, 512GB</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-btns">
                                                        <button className="btn grey">edit</button>
                                                        <button className="btn shade">remove</button>
                                                    </div>
                                                </li>
                                                <li className="list-group-item items"><input type="text" className="form-control" id="quantity"/></li>
                                                <li className="list-group-item price">
                                                    <p>$680.00</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="single-products">
                                            <ul className="list-group items-list list-group-horizontal">
                                                <li className="list-group-item details ">
                                                    <div className="product-details">
                                                        <div className="product-img">
                                                            <img src="vendor/img/iphone.png" className="img-fluid" alt="iphone.png"/>
                                                        </div>
                                                        <div className="specs">
                                                            <h6>Galaxy S21 Ultra</h6>
                                                            <p>Brand New, AT&amp;T, 512GB</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-btns">
                                                        <button className="btn grey">edit</button>
                                                        <button className="btn shade">remove</button>
                                                    </div>
                                                </li>
                                                <li className="list-group-item items"><input type="text" className="form-control" id="quantity"/></li>
                                                <li className="list-group-item price">
                                                    <p>$680.00</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="single-products">
                                            <ul className="list-group items-list list-group-horizontal">
                                                <li className="list-group-item details ">
                                                    <div className="product-details">
                                                        <div className="product-img">
                                                            <img src="vendor/img/iphone.png" className="img-fluid" alt="iphone.png"/>
                                                        </div>
                                                        <div className="specs">
                                                            <h6>Galaxy S21 Ultra</h6>
                                                            <p>Brand New, AT&amp;T, 512GB</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-btns">
                                                        <button className="btn grey">edit</button>
                                                        <button className="btn shade">remove</button>
                                                    </div>
                                                </li>
                                                <li className="list-group-item items"><input type="text" className="form-control" id="quantity"/></li>
                                                <li className="list-group-item price">
                                                    <p>$680.00</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="single-products">
                                            <ul className="list-group items-list list-group-horizontal">
                                                <li className="list-group-item details ">
                                                    <div className="product-details">
                                                        <div className="product-img">
                                                            <img src="vendor/img/iphone.png" className="img-fluid" alt="iphone.png"/>
                                                        </div>
                                                        <div className="specs">
                                                            <h6>Galaxy S21 Ultra</h6>
                                                            <p>Brand New, AT&amp;T, 512GB</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-btns">
                                                        <button className="btn grey">edit</button>
                                                        <button className="btn shade">remove</button>
                                                    </div>
                                                </li>
                                                <li className="list-group-item items"><input type="text" className="form-control" id="quantity"/></li>
                                                <li className="list-group-item price">
                                                    <p>$680.00</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <button className="border-btn" type="button">
                                    Empty Your Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-3 col-md-12 d-flex justify-content-center align-items-center">
                        <div className="card checkouts">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0">
                                        <h6>
                                            TRADE-IN SUMMARY
                                        </h6>
                                    </li>
                                    <li className="list-group-item">
                                        <ul className="list-group list-group-horizontal">
                                            <li className="list-group-item w-75">
                                                <p>Total Payout
                                                </p>
                                            </li>
                                            <li className="list-group-item">
                                                <p>$680.00</p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <ul className="list-group label list-group-horizontal">
                                            <li className="list-group-item w-50">
                                                <p>Prepaid Shipping Label</p>
                                            </li>
                                            <li className="list-group-item w-25 ml-auto ">
                                                <p>Free</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <button type="button" className="card-link btn green">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carts
