import React from "react";

import "./style.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <h1>Faça seu Logon</h1>
        <input placeholder="Sua ID" />
        <button type="submit">Entrar</button>
        <a href="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </a>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
