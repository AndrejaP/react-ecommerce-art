import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: var(--mainGreen);
    background: ${props => (props.cart ? "var(--mainBlue)" : "var(--mainGreen)")};
    border: transparent;
    border-radius: 0.3rem;
    padding: 5px 15px;
    color: var(--mainWhite);
    cursor: pointer;
    font-weight: bold;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--darkGreen);
    }
    &:focus {
        outline: none;
    }
    `;