/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import styles from "./NavBar.module.scss";

function NavBar({ onLiClick }) {

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMostrarLista(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const items = ["Inicio", "Tecnologias", "Proyecto", "Estudios" , "Contactame"];

  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState(0);
  const [mostrarLista, setMostrarLista] = useState(false);

  const handleImagenClick = () => {
    setMostrarLista(!mostrarLista);
  };

  const handleLiClick = (index) => {
    setSelectedItem(index);
    onLiClick(index);
    setMostrarLista(false);
  };


  return (
    <div
      ref={navRef}
      className={`${styles.navContainer} ${
        mostrarLista ? styles.mostrarLista : ""
      }`}
    >
      <div className={styles.imgContainer} onClick={handleImagenClick}>
        <img
          src="/Imagen de respaldo/FotoPresentacion.JPG"
          alt=""
        />
      </div>
      <div className={styles.navSection}>
        <ul>
          {items.slice(0 ,4).map((item, index) => (
            <li key={index} onClick={() => handleLiClick(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContact}>
          {items.slice(4).map((item, index) => (
            <a key={index} onClick={() => handleLiClick(4)}>
              {item}
            </a>
          ))}
      </div>
    </div>
  );
}

export default NavBar;

{/* <a key={index} onClick={() => handleLiClick(prevValue => prevValue + 1)}>*/}