import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../HOC/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Brewery from '../../components/Brewery/Brewery';
import './Breweries.css';

class Blog extends Component {
    state = {
        breweries: [],
        selectedPostId: null,
        showDetails : true,
        error: false
    }

    componentDidMount () {
        axios.get( 'https://api.openbrewerydb.org/breweries' )
            .then( response => {
                this.setState({breweries: response.data});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        let selectedBrewery = this.state.breweries.filter(brewery => brewery.id  === id);
        this.setState({selectedPost: selectedBrewery[0]});
    }

    detailHandler = () => {
        this.setState( { showDetails: true } );
    }

    detailCloseHandler = () => {
        this.setState( { showDetails: false , selectedPost: null} );
    }

    render () {
        let breweries = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            breweries = this.state.breweries.map(post => {
                return <Brewery 
                    key={post.id} 
                    title={post.name} 
                    city={post.city}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <Aux>
                <Modal show={this.state.showDetails} modalClosed={this.detailCloseHandler}>
                    details
                </Modal>
                <section className="Breweries">
                    {breweries}
                </section>
            </Aux>
        );
    }
}

export default Blog;