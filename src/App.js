import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import About from './About';
import Menu from './Menu';
import Product from './Product';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Cart from './Cart';
import CartButton from './CartButton';
import CartItem from './CartItem';
import Feature from './Feature';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';

export default function App() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact us', href: '#contact' }
  ];

  const coffeeData = [
    { id: 1, name: 'Strong Coffee', description: 'Bold, rich, full-bodied, energizing, intense.', price: 199 },
    { id: 2, name: 'Black Coffee', description: 'Smooth, simple, rich flavor.', price: 149 },
    { id: 3, name: 'Milk Coffee', description: 'Creamy, smooth, mild, comforting, balanced.', price: 129 },
    { id: 4, name: 'Foamy Coffee', description: 'Frothy, creamy, soft, velvety, indulgent.', price: 119 },
    { id: 5, name: 'Spotted Coffee', description: 'Bold, aromatic, lightly sweetened, flavorful, energizing.', price: 99 },
  ];

  const dessertData = [
    { id: 11, name: 'Blueberry Muffin', description: 'Bursting taste of fresh blueberries', price: 149 },
    { id: 21, name: 'Cinnamon Roll with Raspberry', description: 'Classic roll and juicy raspberry', price: 179 },
    { id: 31, name: 'Classic Cheesecake', description: 'When you want nothing superfluous', price: 149 },
    { id: 41, name: 'Carrot Cake', description: 'Lorem ipsum dolor sit amet', price: 129 },
    { id: 51, name: 'Mango mousse', description: 'Lorem ipsum dolor sit amet', price: 99 },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [cartShowing, setCartShowing] = useState(false);
  const [sidebarShowing, setSidebarShowing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const getTotalItems = (items) => items.reduce((sum, item) => sum + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, []));
  };

  const handleIncrementCartItem = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDeleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const sumTotalCartItems = (items) =>
    items.reduce((sum, item) => sum + item.amount * item.price, 0).toFixed(2);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleSignUpSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // Handle guest login (skip login process)
  const handleGuestLogin = () => {
    setIsLoggedIn(true);
    setUsername('Guest');
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login page */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} onGuestLogin={handleGuestLogin} />} />

        {/* Route for SignUp page */}
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignUp onSignUpSuccess={handleSignUpSuccess} />} />

        {/* Route for main page with conditional render based on login status */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Profile username={username} onLogout={handleLogout} />
                <Header navigation={navigation} show={setSidebarShowing} />
                <Sidebar navigation={navigation} isShowing={sidebarShowing} show={setSidebarShowing} />
                <About />
                <Menu
                  coffee={<Product addToCart={handleAddToCart} productItems={coffeeData} />}
                  dessert={<Product addToCart={handleAddToCart} productItems={dessertData} />}
                  button={isLoggedIn && <CartButton show={setCartShowing} badgeContent={getTotalItems(cartItems)} />}
                />
                <Feature />
                <ImageSlider />
                <Cart
                  isShowing={cartShowing}
                  totalItems={sumTotalCartItems(cartItems)}
                  show={setCartShowing}
                  item={
                    <CartItem
                      cartItems={cartItems}
                      removeFromCart={handleRemoveFromCart}
                      incrementCartItem={handleIncrementCartItem}
                      deleteFromCart={handleDeleteFromCart}
                    />
                  }
                />
                <Footer />
              </>
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} onGuestLogin={handleGuestLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}
