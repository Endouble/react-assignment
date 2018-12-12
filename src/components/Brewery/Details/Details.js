import React, { Component } from 'react';
import Aux from '../../../HOC/Aux/Aux';
import './Details.css';

class ProductDetails extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <h3>Product Detail</h3>
                <table className="table">
                    <thead>

                    </thead>
                    <tr>
                        <td>Name</td><td>{ this.props.detail.name }</td>
                    </tr>
                    <tr>
                        <td>Street</td><td>{ this.props.detail.street }</td>
                    </tr>
                    <tr>
                        <td>City</td><td>{ this.props.detail.city }</td>
                    </tr>
                    <tr>
                        <td>State</td><td>{ this.props.detail.state }</td>
                    </tr>
                    <tr>
                        <td>Country</td><td>{ this.props.detail.country }</td>
                    </tr>
                    <tr>
                        <td>Phone</td><td>{ this.props.detail.phone }</td>
                    </tr>
                    <tr>
                        <td>Url</td><td>{ this.props.detail.website_url }</td>
                    </tr>
                </table>
            </Aux>
        );
    }
}

export default ProductDetails;