import React from 'react'
import './main.css';

function Account() {
    return (
        <section className="account">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="main-title">
                            <h3>
                                Device You've selected
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="tabs">
                            {/* Account Info */}
                            <input
                                type="radio"
                                className="tabs__button"
                                name="accountForm"
                                id="accountInfo"
                                defaultChecked/>
                            <label className="tabs__text" htmlFor="accountInfo"><i className="far fa-user"/>
                                Account Info</label>
                            <div className="tabs__content">
                                <div className="card">
                                    <div className="card-header ">
                                        Account Information
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-xl-6">
                                                    <label htmlFor="fullname">Full Name</label>
                                                    <input type="text" className="form-control" id="fullname"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Phone</label>
                                                        <input type="number" className="form-control" id="phone"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="addressSave"/>
                                                            <label className="custom-control-label" htmlFor="addressSave">Send Me important notification about trade-ins</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-xl-6">
                                                    <label htmlFor="password">New Password</label>
                                                    <input type="password" className="form-control" id="password"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-xl-3">
                                                    <button type="submit" className="btn submit green">Save Account Details</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Trade-Ins */}
                            <input type="radio" className="tabs__button" name="accountForm" id="tradeIn"/>
                            <label className="tabs__text" htmlFor="tradeIn">Trade-Ins</label>
                            <div className="tabs__content">
                                <div className="card trades">
                                    <div className="card-header ">
                                        TRADE-IN OFFERS
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <ul className="list-group list-group-horizontal">
                                                    <li className="list-group-item flex-fill text-left">
                                                        <div className="d-flex w-100 flex-column">
                                                            <a className="offer" href="/">Offer #514503</a>
                                                            <p>May 6th, 2021</p>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item status flex-fill text-center">
                                                        <div className="d-flex w-100 flex-column">
                                                            <div className="btn-box">
                                                                <div className="button">Cancelled</div>
                                                            </div>
                                                            <p>This offer has been canceled.</p>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item price flex-fill text-right">
                                                        <div className="d-flex w-100 flex-column">
                                                            <h6>
                                                                $0.00
                                                            </h6>
                                                            <p>1 Item</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="list-group-item">
                                                <ul className="list-group list-group-horizontal">
                                                    <li className="list-group-item flex-fill text-left">
                                                        <div className="d-flex w-100 flex-column">
                                                            <a className="offer" href="/">Offer #514503</a>
                                                            <p>May 6th, 2021</p>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item status flex-fill text-center">
                                                        <div className="d-flex w-100 flex-column">
                                                            <div className="btn-box">
                                                                <div className="button">Cancelled</div>
                                                            </div>
                                                            <p>This offer has been canceled.</p>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item price flex-fill text-right">
                                                        <div className="d-flex w-100 flex-column">
                                                            <h6>
                                                                $0.00
                                                            </h6>
                                                            <p>1 Item</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Adresses */}
                            <input type="radio" className="tabs__button" name="accountForm" id="adresses"/>
                            <label className="tabs__text" htmlFor="adresses">
                                <i className="far fa-address-book"/>
                                Adresses</label>
                            <div className="tabs__content">
                                <div className="card address">
                                    <div className="card-header d-flex justify-content-between">
                                        <span>
                                            SAVED ADDRESSES</span>
                                        <button
                                            className="btn green newAdresses"
                                            type="button"
                                            data-toggle="modal"
                                            data-target="#form">
                                            <i className="fas fa-plus"/>
                                            New address
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card address-box">
                                                    <div className="card-body clearfix">
                                                        <div className="cardTextarea float-left">
                                                            <h4 className="card-title">Nickname</h4>
                                                            <h5 className="card-subtitle boxed card-item">Full Name</h5>
                                                            <h6 className="card-text card-item">
                                                                Apt, Road,
                                                                <br/>
                                                                City
                                                                <br/>
                                                                State, ZIp
                                                                <br/>
                                                            </h6>
                                                            <p className="boxed card-item">
                                                                123456789
                                                            </p>
                                                            <div className="radio-area w-100">
                                                                <input type="radio" name="default" id="default02"/>
                                                                <label htmlFor="default02">Default Address</label>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn green edit float-right"
                                                            type="button"
                                                            data-toggle="modal"
                                                            data-target="#form"><i className="fas fa-pen"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card address-box">
                                                    <div className="card-body clearfix">
                                                        <div className="cardTextarea float-left">
                                                            <h4 className="card-title">Nickname</h4>
                                                            <h5 className="card-subtitle boxed card-item">Full Name</h5>
                                                            <h6 className="card-text card-item">
                                                                Apt, Road,
                                                                <br/>
                                                                City
                                                                <br/>
                                                                State, ZIp
                                                                <br/>
                                                            </h6>
                                                            <p className="boxed card-item">
                                                                123456789
                                                            </p>
                                                            <div className="radio-area w-100">
                                                                <input type="radio" name="default" id="default03"/>
                                                                <label htmlFor="default03">Default Address</label>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn green edit float-right"
                                                            type="button"
                                                            data-toggle="modal"
                                                            data-target="#form"><i className="fas fa-pen"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card address-box">
                                                    <div className="card-body clearfix">
                                                        <div className="cardTextarea float-left">
                                                            <h4 className="card-title">Nickname</h4>
                                                            <h5 className="card-subtitle boxed card-item">Full Name</h5>
                                                            <h6 className="card-text card-item">
                                                                Apt, Road,
                                                                <br/>
                                                                City
                                                                <br/>
                                                                State, ZIp
                                                                <br/>
                                                            </h6>
                                                            <p className="boxed card-item">
                                                                123456789
                                                            </p>
                                                            <div className="radio-area w-100">
                                                                <input type="radio" name="default" id="default"/>
                                                                <label htmlFor="default">Default Address</label>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn green edit float-right"
                                                            type="button"
                                                            data-toggle="modal"
                                                            data-target="#form"><i className="fas fa-pen"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Account
