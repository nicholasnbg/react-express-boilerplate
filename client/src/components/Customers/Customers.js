import React, { Component } from 'react';
import './Customers.css'

class Customers extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => {
            this.setState({customers},
            ()=>console.log('customers fetched...',customers));
        });
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer => (
                        <li key={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Customers;