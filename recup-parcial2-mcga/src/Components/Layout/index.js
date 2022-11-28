import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "../../Screens/Users";
import Home from "../Home";
import Test from "../../Screens/test"

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;