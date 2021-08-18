import React from 'react'

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="/">
                        <img src="vendor/img/Logo.png" alt="Logo" className="img-fluid" />
                    </a>
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
                                <a className="nav-link" href="/">Start Selling</a>
                                <ul className="drop-menu">
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="/">
                                            <span className="icons">
                                                <img src="vendor/img/iphone.png" alt="" className="img-fluid" />
                                            </span>
                                            <span className="text">Sell iPhone</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login/Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Account</a>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="/"><i className="fas fa-search" /></a>
                            </li>
                            <li className="nav-item d-block d-md-none">
                                <a className="nav-link" href="/"><i className="fas fa-search" />
                                    Search</a>
                            </li>
                            <li className="nav-item boxed">
                                <a className="nav-link" href="/">
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
                                    My Box</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
