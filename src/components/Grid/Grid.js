import React, { Component } from 'react';

import giphy from '../../services/giphy';
import './Grid.scss';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoading: true,
            pagination: {},
            searchParams: {
                limit: 10,
                offset: 0,
                q: 'haha',
            },
            error: null,
        };

        this.getGiphs = this.getGiphs.bind(this);
    }

    componentDidMount() {
        this.getGiphs();
    }

    getGiphs() {
        const { searchParams, images } = this.state;
        giphy(searchParams)
            .then(((response) => {
                this.setState({
                    images: images.concat(response.data),
                    isLoading: false,
                    pagination: response.pagination,
                });
            }))
            .catch((err) => {
                this.setState({
                    error: err,
                });
            });
    }

    render() {
        const { error, isLoading, images } = this.state;
        if (error) {
            return (
                <div className="Error">
                    {error}
                </div>
            );
        }
        if (isLoading) {
            return (
                <div className="Loader">
                    loading ...
                </div>
            );
        }
        return (
            <div className="Grid">
                {images && images.map((image => (
                    <img
                        key={image.id}
                        src={image.images.fixed_width.url}
                        alt="some alt'"
                    />
                )))}
            </div>
        );
    }
}
