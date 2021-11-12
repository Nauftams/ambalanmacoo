import React, { Component } from "react";
import "./Landing.css";
import NavbarComp from "../component/NavbarComp";
import FooterComp from "../component/FooterComp";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container1">
          <NavbarComp />
          <h1 className="text-center hero-text">Selamat datang di Ambalanmaco</h1>
        </div>
        <h1 className="text-center mt-5 div-title">Ambalanmaco</h1>
        <div className="container2">
          <p className="text-center text-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus pariatur saepe ex ducimus provident eveniet consequatur est in quibusdam explicabo ab ea vero, impedit, reprehenderit repellendus. Distinctio quia
            rerum placeat rem ullam hic eius fugit id, eos, iste ut quis eveniet? Provident nisi harum eum ex? Numquam, optio in.
          </p>
        </div>
        <h1 className="text-center mt-5 div-title">Apa itu PTA ?</h1>
        <div className="container2">
          <p className="text-center text-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus pariatur saepe ex ducimus provident eveniet consequatur est in quibusdam explicabo ab ea vero, impedit, reprehenderit repellendus. Distinctio quia
            rerum placeat rem ullam hic eius fugit id, eos, iste ut quis eveniet? Provident nisi harum eum ex? Numquam, optio in.
          </p>
        </div>
        <div>
          <FooterComp />
        </div>
      </div>
    );
  }
}

export default Landing;
