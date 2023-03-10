import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./routes/Cart/Cart.route";
import Footer from "./routes/Footer/Footer.route";

import Header from "./routes/Header/Header.route";
import Home from "./routes/Home/Home.route";
import Menu from "./routes/Menu/Menu.route";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header /> <Footer />
                    </>
                }
            >
                <Route index element={<Home />} />
                <Route path="menu/*" element={<Menu />} />
                <Route path="cart" element={<Cart />} />
                {/* <Route
                    path="/calculator"
                    element={isAuthenticated ? <CalculatorGraph /> : <Navigate to="/" />}
                />
                <Route
                    path="/account"
                    element={isAuthenticated ? <Account /> : <Navigate to="/" />}
                />
                <Route
                    path="/admin"
                    element={
                        isAuthenticated && user.role === "admin" ? <Admin /> : <Navigate to="/" />
                    }
                /> */}
            </Route>
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <p>There is nothing here!</p>
                        <Footer />
                    </>
                }
            />
        </Routes>
    );
};

export default App;

console.log(`Built by: Renz Vital (https://rvitality.github.io/v1/)`);
