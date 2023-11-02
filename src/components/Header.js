import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/main.module.css";

const Header = () => (
  <Header classname={styles.header}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
    </nav>
  </Header>
);

export default Header;