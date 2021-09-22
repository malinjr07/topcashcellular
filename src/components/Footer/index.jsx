import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-2 col-md-3">
                        <div className="footer-parts">
                            <h4 className="head">CUSTOMER SERVICE</h4>
                            <div className="content">
                                <ul>
                                    <li className="number">
                                        <p>1 (855) 487-9678</p>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <p>SUPPORT &amp; FAQ</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-3">
                        <div className="footer-parts">
                            <h4 className="head">connect with us</h4>
                            <div className="content">
                                <ul>
                                    <li>
                                        <a href="/">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="/">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="/">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="/">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="footer-parts">
                            <h4 className="head">subscribe</h4>
                            <div className="content">
                                <ul>
                                    <li>
                                        <form className="form-inline">
                                            <label className="sr-only" htmlFor="email">Username</label>
                                            <div className="input-group mb-2 mr-sm-2">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter Your Email" />
                                                <div className="input-group-prepend">
                                                    <button type="submit" className="btn submit green">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <p>
                                            Sign up to receive news, tips, and offers.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6">
                            <p>© 2020–2021 topcashcellular.com LLC — All Rights Reserved</p>
                        </div>
                        <div className="col-md-4">
                            <p>Application Developed By
                                <a href='mailto:mnjr@fastcodertech.com' >Maruf</a>, &nbsp; &nbsp;
                                <a href='mailto:alemhasib@fastcodertech.com' >Alem</a> &nbsp;
                                &amp;
                                <a href='mailto:mujahidulislam92@gmail.com' >Mujahid</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
