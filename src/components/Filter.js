import React, { Component } from 'react'

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropdown">
                <select onChange={this.props.handleChange}>
                    <option value="All Product">All Product</option>
                    <option value="Expire soon">Expire soon</option>
                    <option value="Exipred">Expired</option>
                </select>
            </div>
        );
    }
}

export default Filter;