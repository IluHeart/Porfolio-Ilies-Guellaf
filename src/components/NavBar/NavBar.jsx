/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar({ onLiClick }) {
  const items = ["Inicio", "Tecnologias", "Proyecto", "Estudios"];

  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState(0);
  const [mostrarLista, setMostrarLista] = useState(false);

  const handleImagenClick = () => {
    setMostrarLista(!mostrarLista);
  };

  const handleLiClick = (index) => {
    setSelectedItem(index);
    onLiClick(index);
  };

  return (
    <div
      className={`${styles.navContainer} ${
        mostrarLista ? styles.mostrarLista : ""
      }`}
    >
      <div className={styles.imgContainer}>
        <img
          src="\public\Imagen de respaldo\IMG_0815.JPG"
          alt=""
          onClick={handleImagenClick}
        />
      </div>
      <div className={styles.navSection}>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleLiClick(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContact}>
        <a href="">Contactame</a>
      </div>
    </div>
  );
}

export default NavBar;
