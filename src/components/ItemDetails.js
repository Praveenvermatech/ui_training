import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom'

class ItemDetails extends Component {
    render() {
        const itemDetails = this.props.location.state.data;

        return (
            <div className="bodyColor">
                <h2>Product Details</h2><br />
                <div className="imageAlign">
                    <img class="cardImage img-fluid" src="./assets/images/image2.jpg" />
                </div>
                <div className="right_align_data">
                    <div>
                    <button className="btn btn-primary">Add to Cart</button>
                        <Link
                            to={{
                                pathname: "/OrderPayment",
                                state: { data: itemDetails }
                            }}>
                        <button className="btn btn-warning"  style={{marginLeft:"50px"}} >Buy Now</button>
                        </Link>
                    </div>
                </div>
                <div className="right_align_data">
                    <p>{itemDetails.name}</p>
                    <p>Rs.{itemDetails.price.toString()}</p>
                    <p>Path: {itemDetails.path.toString()} | Model: {itemDetails.model}</p>
                    <p>Discount: {itemDetails.discount.toString()}</p><hr />
                    <p><b><u>Specification</u></b></p>
                    <div id="alignRight">
                        <p><b>Weight:</b> {itemDetails.specifications.weight}  | <b>  Mount:</b>{itemDetails.specifications.mount}</p>
                        <p><b>Format: </b>{itemDetails.specifications.format}  |  <b> CircularAperture:</b> {itemDetails.specifications.circularAperture}</p>
                    </div><hr />
                    <p id="alignRightFeature"><b><u>Features</u></b></p>
                    <div id="alignRight">
                        <p>{itemDetails.features}</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default ItemDetails;