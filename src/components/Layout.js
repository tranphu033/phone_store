import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function Layout(props) {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#D3D3D3' }}>
                    <a className="navbar-brand" href="/" style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }}>
                        Phone Shop
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
    */}
                </nav>
            </header>

            <main>
                {props.children}
            </main>

            <footer style={{ backgroundColor: '#D3D3D3' }}>
                <div className="container-fluid footer-section">
                    <div className="row" >
                        <div style={{ textAlign: 'center' }}>
                            <h4>Phone Shop</h4>
                            <p>
                                17 Co Bi
                                <br />
                                Trau Quy, Gia Lam, Ha Noi
                                <br />
                                (123) 456-7890
                            </p>
                        </div>
                        {/*
                        <div className="col-md-4 col-sm-12">
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h4>Follow Us</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <a href="#">YouTube</a>
                                </li>
                            </ul>
                        </div>
*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}
