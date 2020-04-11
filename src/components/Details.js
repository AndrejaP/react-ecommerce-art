import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => { //destructuring:
                    const { id, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center
                                text-slanted text-blue my-5">
                                    <h1>{ title }</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={ img } className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Title: { title }</h2>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: { price } <span>€</span>
                                        </strong>
                                    </h4>
                                        <p className="text-muted lead">{ info }</p>
                                        {/* buttons */}
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer cart>Back to Paintings</ButtonContainer>
                                            </Link>
                                            <ButtonContainer disabled={ inCart ? true : false }
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}>
                                                { inCart ? "inCart" : "Add to Cart" }
                                            </ButtonContainer>
                                        </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}
