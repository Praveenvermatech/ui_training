import React from 'react'

function Header(props) {


    return (
        <div>

            {/* <p className="App-header">{props.name}</p> */}
            <div className="App-header">
                {props.cartName} -
                <img className="cartImage" src="./assets/images/cart.png" alt="Cart" />
                {0}
            </div>

        </div>
    );


}

export default Header;