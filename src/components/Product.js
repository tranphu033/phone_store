import React, { Component } from "react";
import prods from "../db/prods.json"
import Layout from "./Layout";
import "../custom.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            cartItems: []
        }
    }

    componentDidMount() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.setState({
                cartItems: JSON.parse(storedCart),
                count: JSON.parse(storedCart).length
            });
            console.log(this.state.cartItems);
        }
    }

    add2Cart = (item) => {
        let ret = this.state.cartItems.findIndex((e) => e.id === item.id)
        if (ret > -1) {
            alert('You have already added this product to your cart!')
        }
        else {
            this.setState({
                count: this.state.count + 1
            })
            //add selected product to cart:
            this.state.cartItems.push(item);
            //update local storage
            localStorage.setItem('cart', JSON.stringify(this.state.cartItems))
        }
    }
    render() {
        return (
            <Layout>
                <div className="container-fluid featured-products">
                    <div className="col-md-12">
                        <h2 style={{ textAlign: 'left', marginTop: '20px' }}>
                            Welcome to Phone Shop!
                        </h2>
                        <div style={{ textAlign: 'right', fontSize: '20px', marginBottom: '20px' }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="badge" style={{ color: "blue" }}>{this.state.count}</span> <br />
                            <Link to='/cart' style={{ textDecoration: 'none' }}>View cart</Link>
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: '15px' }}>
                        {prods.map((item) => (
                            <div className="col-md-3 col-sm-6" key={item.id}>
                                <div className="card">
                                    <img
                                        src={item.img}
                                        className="card-img-top"
                                        alt={"phone:" + item.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">
                                            {item.price} VND
                                        </p>
                                        <button className="btn btn-primary" onClick={() => this.add2Cart(item)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        )
    }
}