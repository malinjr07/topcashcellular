import React from 'react'
import { Link } from 'react-router-dom'



function Heading() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <Link className="navbar-brand" to="/">
                        <img src="vendor/img/Logo.png" alt="Logo" className="img-fluid" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mainNav"
                        aria-controls="mainNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item has-dropdown">
                                <Link className="nav-link" to="/category">Start Selling</Link>
                                <ul className="drop-menu">
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link className="menu-link" to="/category/iphone">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Support</Link>
                            </li>
                            <li className="nav-item">
                                <button type='button' className="nav-link">Login/Signup</button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/account">Account</Link>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <button type='button' className="nav-link"><i className="fas fa-search" /></button>
                            </li>
                            <li className="nav-item d-block d-md-none">
                                <Link className="nav-link" to="/"><i className="fas fa-search" />
                                    Search</Link>
                            </li>
                            <li className="nav-item boxed">
                                <Link className="nav-link" to="/">
                                    <span className="number">0</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.84 30.09">
                                        <defs />
                                        <title>box-icon</title>
                                        <rect
                                            className="box-icon-class"
                                            x=".92"
                                            y=".92"
                                            width={32}
                                            height="6.98"
                                            rx="1.75"
                                            ry="1.75" />
                                        <rect
                                            className="box-icon-class"
                                            x="2.92"
                                            y="7.9"
                                            width={28}
                                            height="21.26"
                                            rx="1.75"
                                            ry="1.75" />
                                    </svg>
                                    My Box</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Heading
