import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cartItems, setCart] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    //console.log(storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, []);

  useEffect(() => {
    getTotalPay();

  }, [cartItems]);

  const removeProd = (rm_item) => {
    let newCart = cartItems.filter(item => item !== rm_item)
    setCart(newCart)
    //update local storage:
    localStorage.setItem('cart', JSON.stringify(newCart))
    /*if (cartItems.length === 1) {
      console.log('1')
      localStorage.removeItem('cart')
    }*/
  }


  const increment = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && item.bought_quant < item.quantity) {
        return {
          ...cartItem,
          bought_quant: cartItem.bought_quant + 1
        }
      } else {
        return cartItem
      }
    })
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const decrement = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && item.bought_quant > 1) {
        return {
          ...cartItem,
          bought_quant: cartItem.bought_quant - 1
        }
      } else {
        return cartItem
      }
    })
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const getTotalPay = () => {
    let tempTotal = 0;
    if (Array.isArray(cartItems)) {
      cartItems.forEach(item => {
        tempTotal += item.bought_quant * item.price;
      })
    }
    setTotal(tempTotal);
  }

  const pay = () => {
    localStorage.removeItem('cart')
    alert('Thank you for shopping in our shop!')
    window.location.assign('/')
  }

  return (
    <Layout>
      <h2>Your Cart</h2>
      <Table striped bordered hover style={{ width: '60%', height: 'auto', marginLeft: '15px', border: 1 }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price(VND)</th>
            <th>Quantity</th>
            <th style={{ width: '20%', height: 'auto' }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {(cartItems && cartItems.length > 0) ?
            cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{ width: '45%'}}>
                  <img src={item.img} alt={item.name} style={{ width: '20%', height: 'auto' }}/>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td>
                  <Button style={{ transform: 'scale(0.7)' }} onClick={() => decrement(item)}>-</Button>
                  {item.bought_quant}
                  <Button style={{ transform: 'scale(0.7)' }} onClick={() => increment(item)}>+</Button>
                </td>
                <td>
                  <Button variant="danger" 
                    onClick={() => removeProd(item)}>
                    Remove
                  </Button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan='4'>
                  Your cart is empty!
                </td>
              </tr>
            )
          }
          {(cartItems && cartItems.length > 0) && (
            <tr>
              <td colSpan='3'></td>
              <td style={{ textAlign: 'left' }}>
                Total: {total} VND
                <br />
                <Button onClick={() => pay()} style={{ width: '85px', height: 'auto' }}>
                    Pay
                </Button>
              </td>
            </tr>
            
          )}

        </tbody>
      </Table>
      <Button style={{ marginBottom: '15px', marginLeft: '10px' }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Back</Link>
      </Button>
    </Layout>
  );
};

export default Cart;
