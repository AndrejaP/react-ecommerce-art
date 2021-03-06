import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                   <img src={logo} alt="store" style={{width: "3.5rem"}} className="navbar-brand"/>
               </Link>
               <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/about" className="nav-link">
                           about
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            prints
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/originals" className="nav-link">
                            original paintings
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/accessoires" className="nav-link">
                            accessoires
                        </Link>
                    </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                       my cart
                   </ButtonContainer>
               </Link>
                    <div class="hamburger-menu">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
           </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    `;

