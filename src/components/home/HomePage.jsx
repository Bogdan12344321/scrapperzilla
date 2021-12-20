import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        axios.get('http://localhost:5000/users/me').then((req)=>{
            console.log('req ',req);
            if(!req.data.username){
                this.props.history.push('/login');
            }
        }).catch((e)=>{
            if(e){
                this.props.history.push('/login');
            }
        })
    };
    render() {
        return (
            <section className="container">
            Bogdan
          </section>
        );
    }
}

export default withRouter(HomePage);
