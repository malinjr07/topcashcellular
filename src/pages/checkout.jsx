import React from 'react'

function Checkout() {
    return (
        <section className="checkout">
            <div className="container-fluid light">
                <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="main-title">
                    <h3>
                        Check Out
                    </h3>
                    </div>
                </div>
                </div>
            </div>
            <div className="container section-padding ">
                <div className="row">
                <div className="col-md-8 col-sm-12">
                    <form action>
                    <div className="accordion" id="checkOut">
                        <div className="card">
                        <div className="card-header" id="accounts">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Account<span className="mini"> - mail@mail.com</span>
                            </button>
                        </div>
                        <div id="collapseOne" className="collapse show accounts" aria-labelledby="accounts" data-parent="#checkOut">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-xl-5">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">Continue As Geust</h6>
                                    <div className="form-group">
                                        <label htmlFor="mails">Email</label>
                                        <input type="email" className="form-control" id="mails" />
                                    </div>
                                    <button type="button" className="btn green" data-toggle="collapse" data-target="#transections" aria-expanded="false" aria-controls="transections">Continue As Geust</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-7">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">Customer Login</h6>
                                    <div className="tabs">
                                        {/* Sign In */}
                                        <input type="radio" className="tabs__button" name="signForm" id="signIn" defaultChecked />
                                        <label className="tabs__text" htmlFor="signIn">LogIn</label>
                                        <div className="tabs__content">
                                        <div className="input-group">
                                            <label className="input-group__label" htmlFor="email">Email</label>
                                            <input className="input-group__input" type="email" placeholder=" " name="email" id="email" autoComplete="off" required />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-group__label" htmlFor="password">Password</label>
                                            <input className="input-group__input" type="password" name="password" placeholder=" " id="password" required />
                                        </div>
                                        {/* Normally I would create a grid system or use an existing to cater this issue */}
                                        <div className="flex-space-between">
                                            <label className="flex-align-center"><input type="checkbox" /> Remember Me</label>
                                            <p><a href="/">Forgot Password?</a></p>
                                        </div>
                                        <button type="submit">Login</button>
                                        <div className="api-login">
                                            <p>Or, Login With : </p>
                                            <ul>
                                            <li><a href="/"> <i className="fab fa-google" /> Google </a></li>
                                            <li><a href="/"> <i className="fab fa-facebook-square" /> Facebook </a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        {/* Sign Up */}
                                        <input type="radio" className="tabs__button" name="signForm" id="signUp" />
                                        <label className="tabs__text" htmlFor="signUp">Sign Up</label>
                                        <div className="tabs__content">
                                        <form className="form">
                                            <div className="input-group">
                                            <label className="input-group__label" htmlFor="email">Email</label>
                                            <input className="input-group__input" type="email" placeholder=" " name="username" id="username" autoComplete="off" required />
                                            </div>
                                            <div className="input-group">
                                            <label className="input-group__label" htmlFor="password">Password</label>
                                            <input className="input-group__input" type="password" name="password" placeholder=" " id="password" required />
                                            </div>
                                            <div className="input-group">
                                            <label className="input-group__label" htmlFor="retype-password">Confirm Password</label>
                                            <input className="input-group__input" type="password" name="retype-password" placeholder=" " id="retype-password" required />
                                            </div>
                                            <button type="submit">Register</button>
                                        </form>
                                        <div className="api-login">
                                            <p>Or, Login With : </p>
                                            <ul>
                                            <li><a href="/"> <i className="fab fa-google" /> Google </a></li>
                                            <li><a href="/"> <i className="fab fa-facebook-square" /> Facebook </a></li>
                                            </ul>
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
                        <div className="card">
                        <div className="card-header" id="payments">
                            <h5 className="btn btn-link btn-block text-left">
                            Payments<span className="mini"> - PayPal</span>
                            </h5>
                        </div>
                        <div id="transections" className="collapse payments" aria-labelledby="payments" data-parent="#checkOut">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">How would you like to be paid</h6>
                                    <div className="tabs">
                                        {/* Sign In */}
                                        <input type="radio" className="tabs__button" name="payees" id="payPal" defaultChecked />
                                        <label className="tabs__text" htmlFor="payPal">PayPal</label>
                                        <div className="tabs__content">
                                        <div className="assurance">
                                            <p>We'll credit your PayPal Email Address once your item(s) have been verified by our staff. Please note that PayPal charges a fee ($0.30 + 2.9%) to receive funds using their service.</p>
                                        </div>
                                        <div className="input-group">
                                            <input className="input-group__input" type="email" placeholder=" " name="paypalEmail" id="paypalEmail" autoComplete="off" required />
                                            <label className="input-group__label" htmlFor="paypalEmail"> PayPal Email</label>
                                        </div>
                                        <div className="input-group">
                                            <input className="input-group__input" type="email" placeholder=" " name="PaypalConfirm" id="PaypalConfirm" autoComplete="off" required />
                                            <label className="input-group__label" htmlFor="PaypalConfirm">Confirm PayPal Email</label>
                                        </div>
                                        </div>
                                        {/* Sign Up */}
                                        <input type="radio" className="tabs__button" name="payees" id="zelle" />
                                        <label className="tabs__text" htmlFor="zelle">Zelle</label>
                                        <div className="tabs__content">
                                        <div className="assurance">
                                            <p>We'll credit your Zelle® account once your item(s) have been verified by our staff. Email address provided must be associated and linked with your Zelle® account to avoid any delays.</p>
                                        </div>
                                        <div className="input-group">
                                            <input className="input-group__input" type="email" placeholder=" " name="zelleMail" id="zelleMail" autoComplete="off" required />
                                            <label className="input-group__label" htmlFor="zelleMail">Zelle Email Address</label>
                                        </div>
                                        <div className="input-group">
                                            <input className="input-group__input" type="email" placeholder=" " name="zelleConfirm" id="zelleConfirm" autoComplete="off" required />
                                            <label className="input-group__label" htmlFor="zelleConfirm">Confirm Zelle Email Address</label>
                                        </div>
                                        </div>
                                        {/* Sign Up */}
                                        <input type="radio" className="tabs__button" name="payees" id="check" />
                                        <label className="tabs__text" htmlFor="check">Check</label>
                                        <div className="tabs__content">
                                        <div className="payee-text">
                                            <p>We'll mail you a check once your item(s) have been received and verified by our team.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <button type="button" data-toggle="collapse" data-target="#shipping" aria-expanded="false" aria-controls="shipping" className="btn green">Next</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="delivery">
                            <h5 className="btn btn-link btn-block text-left">
                            Shipping
                            </h5>
                        </div>
                        <div id="shipping" className="collapse shipping " aria-labelledby="delivery" data-parent="#checkOut">
                            <div className="card-body">
                            {/* If there's logged in User */}
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">How would you like to be paid</h6>
                                    <div className="input-group">
                                        <label className="w-100" htmlFor="addressBook">Select Address</label>
                                        <select className="custom-select" id="addressBook">
                                        <option selected>Select</option>
                                        <option value={1}>New Adress</option>
                                        <option value={2}>Adress From DataBase</option>
                                        <option value={3}>Adress From DataBase</option>
                                        </select>
                                        <div className="invalid-tooltip">
                                        Please select a valid state.
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">New Address</h6> {/*  */}
                                    <div className="form-row">
                                        <div className="col-xl-6">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="addressSave" />
                                            <label className="custom-control-label" htmlFor="addressSave">Save This Address</label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="fullName">Full name</label>
                                        <input type="text" className="form-control" id="fullName" defaultValue required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" defaultValue required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="addressOne">Address 01</label>
                                        <input type="text" className="form-control" id="addressOne" defaultValue required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="addressTwo">Address 02</label>
                                        <input type="text" className="form-control" id="addressTwo" defaultValue />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" required />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="state">State</label>
                                        <select className="custom-select" id="state" required>
                                            <option>...</option>
                                        </select>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                        <label htmlFor="postalCode">Postal Code</label>
                                        <input type="text" className="form-control" id="postalCode" required />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card">
                                    <div className="card-body">
                                    <h6 className="card-title">Get Paid Faster <span className="mini">. Optional</span></h6>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <button type="button" className="check-btn mb-3">
                                            <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="fastPayment" />
                                            <label className="custom-control-label" htmlFor="fastPayment">Expedited Service (20.00$)</label>
                                            </div>
                                        </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <div className="textarea mb-3">
                                            <h6>2-Day Shipping <span className="mini">and</span> 24 Hour Processing Time</h6>
                                            <p>(This amount will be deducted from the final offer amount)</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <div className="check-content mb-3">
                                            <p>
                                            Please note check payments will arrive in the mail 5 to 10 business days after your trade-in has been processed. For faster payments, please select PayPal or Zelle® .
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                <button type="button" data-toggle="collapse" data-target="#terms" aria-expanded="true" aria-controls="terms" className="btn green">Next</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="agreement">
                            <h5 className="btn btn-link btn-block text-left ">
                            Options &amp; terms
                            </h5>
                        </div>
                        <div id="terms" className="collapse terms" aria-labelledby="agreement" data-parent="#checkOut">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card mb-5">
                                    <div className="card-body">
                                    <h6 className="card-title">Shipping Insurance</h6>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <div className="textarea mb-3">
                                            <h6>All packages are insured up to $100 for free. If you'd like, you can purchase additional shipping insurance to cover the full value of your offer for just <b>$8.00</b> .</h6>
                                            <p>(This amount will be deducted from the final offer amount)</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-8">
                                        <div className="form-row">
                                            <div className="col-xl-7">
                                            <div className="form-group">
                                                <button type="button" className="check-btn yes mb-3">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="yes" name="insurance" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="yes">Yes, Add Insurance</label>
                                                </div>
                                                </button>
                                            </div>
                                            </div>
                                            <div className="col-xl-5">
                                            <div className="form-group">
                                                <button type="button" className="check-btn no mb-3">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="no" name="insurance" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="no">No, thanks</label>
                                                </div>
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <p className="note">* Coverage only applies to damages incurred during transit or lost packages. It does NOT cover packages received with missing or incorrect items.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="card main-card mb-5">
                                    <div className="card-body">
                                    <h6 className="card-title">TERMS &amp; CONDITIONS</h6>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <div className="textarea mb-3">
                                            <h6>Please carefully read our <a href>terms and conditions</a> before placing your offer.</h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                        <div className="check-content mb-3">
                                            <div className="form-row">
                                            <div className="col-xl-12">
                                                <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="accpetance" />
                                                    <label className="custom-control-label" htmlFor="accpetance">I accpet Your Ters and Conditions</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-row">
                                            <div className="col-xl-12">
                                                <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="offers" />
                                                    <label className="custom-control-label" htmlFor="offers">Send me occasional special offers</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-row">
                                            <div className="col-xl-12">
                                                <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="sms" />
                                                    <label className="custom-control-label" htmlFor="sms">Send me important SMS notifications to <span>+1 (191) 771-7104</span> </label>
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
                            <div className="row">
                                <div className="col-xl-12">
                                <button type="submit" className="btn green">Checkout</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div></form>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card checkouts">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0">
                            <h6>
                            TRADE-IN SUMMARY
                            </h6>
                            <button className="btn edit">Edit</button>
                        </li>
                        <li className="list-group-item">
                            <div className="product-details">
                            <div className="product-img"> <img src="vendor/img/iphone.png" className="img-fluid" alt="iphone.png" /> </div>
                            <div className="specs">
                                <h6>Galaxy S21 Ultra</h6>
                                <p>$680</p>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-group label list-group-horizontal">
                            <li className="list-group-item w-75">
                                <p>Prepaid Shipping Label</p>
                            </li>
                            <li className="list-group-item w-25 ml-auto ">
                                <p>Free</p>
                            </li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <ul className="list-group list-group-horizontal">
                            <li className="list-group-item w-75">
                                <p>Total Payout </p>
                            </li>
                            <li className="list-group-item">
                                <p className="color-green">$680.00</p>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    )
}

export default Checkout
