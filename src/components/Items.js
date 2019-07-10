import React from 'react';
import { Link } from 'react-router-dom'


const Items = props => {

   
    if (props.loading) {
        return <h1>Loading...</h1>
    }
    return (<div>
        {props.items.map(item => (
            <div id="itemContainer">
                <div class="col-sm-4" /*onClick={() => props.handleOnClick(item)}*/ >
                    <div class="card border-primary mb-4">
                        <div class="card-body text-primary">
                            <img class="cardImage img-fluid" src="./assets/images/image2.jpg" />
                            <p class="card-title" id="item_align">{item.name}</p>
                            <p class="card-text">Rs. {item.price.toString()} </p>
                            <div>
                            <button id="leftbox" className="btn btn-primary" >Add to Cart</button>
                            <Link
                                to={{
                                    pathname: "/ItemDetails",
                                    state: { data: item }
                                }}>
                                <button  id="rightbox" className="btn btn-warning" >View Detail</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}
    </div>)
};


export default Items;