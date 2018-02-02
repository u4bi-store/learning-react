import React, { Component } from 'react';
import './App.css';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {

    render() {

        const users = this.props.data.users;
        console.log(users);

        return (
            <div className="App">
                <h1> GraphQL </h1>
                { users && users.map(({ id, name, email, age }) => (
                    <p key={ id }>
                        { name } { email } { age }
                    </p>
                ))}
            </div>
        );
    }
}

export default graphql(gql`
    { 
        users { 
            id, 
            name, 
            email, 
            age 
        } 
    }
`)(App);