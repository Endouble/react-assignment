import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../HOC/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Brewery from '../../components/Brewery/Brewery';
import Details from '../../components/Brewery/Details/Details';
import Spinner from '../../components/UI/Spinner/Spinner';
import FilterForm from '../../components/Filter/Filter';
import './Breweries.css';

class Blog extends Component {
    state = {
        breweries: [],
        initialBreweries : [],
        selectedPostDetails : null,
        showDetails : false,
        error: false
    }

    componentDidMount () {
        this.fetchData().then(response => {
            this.setState({breweries: response.data, initialBreweries : response.data});
        });
    }

    fetchData(){
        return axios.get( 'https://api.openbrewerydb.org/breweries' )
    }  

    postSelectedHandler = (id) => {
        let selectedBrewery = this.state.breweries.filter(brewery => brewery.id  === id);

        this.setState ({selectedPostDetails : <Details
                detail={ selectedBrewery[0] }
                closeHandler={this.detailCloseHandler} /> });
        this.setState( { showDetails: true } );
    }

    detailHandler = () => {
        this.setState( { showDetails: true } );
    }

    detailCloseHandler = () => {
        this.setState( { showDetails: false , selectedPost: null} );
    }

    filterData = (dataFilter) => {
        let filteredBreweries  = this.state.initialBreweries;
        console.log(this.state.initialBreweries);
        filteredBreweries = filteredBreweries.filter((brewery) => {
        let breweryName = brewery.name.toLowerCase();
        return breweryName.indexOf(
            dataFilter.toLowerCase()) !== -1
        })
        this.setState({
            breweries: filteredBreweries
        })
    }

    render () {
        let breweries = <Spinner />;
        if (!this.state.error) {
            breweries = this.state.breweries.map(post => {
                return <Brewery 
                    key={post.id} 
                    title={post.name} 
                    city={post.city}
                    country = {post.country}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <Aux>
                <FilterForm onChange ={this.filterData}></FilterForm>
                <Modal show={this.state.showDetails} modalClosed={this.detailCloseHandler}>
                    { this.state.selectedPostDetails }
                </Modal>
                <section className="Breweries">
                    {breweries}
                </section>
            </Aux>
        );
    }
}

export default Blog;