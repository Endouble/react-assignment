import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

// components
import Loader from '../Loader';
import Image from '../Image';
import GiphyPagination from '../GiphyPagination';
import GiphModal from '../GiphModal';

// services
import giphy from '../../services/giphy';

// helpers
import { generateArrayFromNumber } from '../../helpers';

// styles
import './Grid.scss';

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            isLoading: true,
            searchParams: {
                limit: 100,
                offset: 0,
                q: '',
            },
            pages: 0,
            currentPage: 0,
            error: null,
            isResonseEmpty: false,
            isModalOpened: false,
            selectedImage: '',
        };

        this.getGiphs = this.getGiphs.bind(this);
        this.handlePageClicked = this.handlePageClicked.bind(this);
        this.handleImageExpandClicked = this.handleImageExpandClicked.bind(this);
        this.handleImageCopied = this.handleImageCopied.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.searchTimeoutInterval = null;
    }

    componentDidMount() {
        const { searchText } = this.props;
        const { searchParams } = this.state;
        // if searchText in props is passed and its length is equal or more than 3 chars
        if (searchText && searchText.length >= 3) {
            // assign searchText to q in state searchParams
            const newSearchParams = Object.assign(searchParams, { q: searchText });
            this.setState({
                searchParams: newSearchParams,
            }, () => {
                // call get giphs from giphy service
                this.getGiphs();
            });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { searchParams } = this.state;
        const { q } = searchParams;
        const { searchText } = nextProps;
        // if searchText passsed to props is not equal to q in state
        if (searchText !== q) {
            if (searchText.length >= 3) {
                // assign it to q in state
                const newSearchParams = Object.assign(searchParams, { q: searchText, offset: 0 });
                this.setState({
                    searchParams: newSearchParams,
                    isLoading: true,
                }, () => {
                    // clear interval
                    clearInterval(this.searchTimeoutInterval);

                    // debounce search
                    this.searchTimeoutInterval = setTimeout(() => {
                        this.getGiphs();
                    }, 300);
                });
            } else {
                // reset state
                this.setState({
                    images: [],
                    searchParams: {
                        limit: 100,
                        offset: 0,
                        q: '',
                    },
                    isLoading: false,
                    pages: 0,
                    currentPage: 0,
                    isResonseEmpty: false,
                    isImageCopied: false,
                });
            }
        }
    }

    /**
     * get giphs by the giphy service
     */
    getGiphs(page) {
        const { searchParams } = this.state;
        // calculate offset
        if (page === 0) {
            searchParams.offset = 0;
        }
        if (page && page !== 0) {
            searchParams.offset = page * searchParams.limit;
        }

        // reset images in state and show loader
        this.setState({
            images: [],
            isLoading: true,
        }, () => {
            giphy(searchParams)
                .then(((response) => {
                    this.setState({
                        images: response.data,
                        isLoading: false,
                        // calculate pages
                        pages: Math.ceil(response.pagination.total_count / 100),
                        // if status 200 and no images found
                        isResonseEmpty: response.data.length === 0,
                    });
                }))
                .catch((err) => {
                    this.setState({
                        error: err.message || err,
                    });
                });
        });
    }

    /**
     * handles page clicked from pagination component
     * @param pageNumber
     */
    handlePageClicked(pageNumber) {
        const { currentPage } = this.state;
        if (currentPage !== pageNumber - 1) {
            this.setState({
                currentPage: pageNumber - 1,
            }, () => {
                this.getGiphs(pageNumber - 1);
            });
        }
    }

    /**
     * handles image expand click from Image component
     * @param image
     */
    handleImageExpandClicked(image) {
        this.setState({
            isModalOpened: true,
            selectedImage: image,
        });
    }

    /**
     * handle image copy click from Image component
     */
    handleImageCopied() {
        this.setState({
            isImageCopied: true,
        });
        // show alert at the top of page for 1 second
        setTimeout(() => {
            this.setState({
                isImageCopied: false,
            });
        }, 1000);
    }

    /**
     * toggles modal with the expanded image
     */
    toggleModal() {
        const { isModalOpened } = this.state;
        this.setState({
            isModalOpened: !isModalOpened,
        });
    }

    render() {
        const {
            error,
            isLoading,
            images,
            pages,
            currentPage,
            isResonseEmpty,
            isModalOpened,
            isImageCopied,
            selectedImage,
        } = this.state;
        if (error) {
            return (
                <div className="Error">
                    {error}
                </div>
            );
        }
        if (isLoading && images.length === 0) {
            return (
                <Loader />
            );
        }
        if (isResonseEmpty && !isLoading) {
            return (
                <div className="EmptyResults">
                    Oops... No Giphs Found, try another word
                </div>
            );
        }
        return (
            <Fragment>
                <div className="Grid">
                    {isImageCopied && (
                        <Alert
                            color="success"
                            className="Grid__CopiedMessage"
                        >
                            Copied to clipboard
                        </Alert>
                    )}
                    <div className="Grid__Container">
                        {images && images.map((image => (
                            <Image
                                key={`${image.id}${performance.now()}`}
                                isExpandClicked={this.handleImageExpandClicked}
                                isCopiedClicked={this.handleImageCopied}
                                originalSrc={image.images.original.url}
                                shareSrc={image.images.downsized_medium.url}
                                src={image.images.fixed_width_still.url}
                                alt={image.title}
                            />
                        )))}
                    </div>
                </div>
                {isLoading && images.length > 0 && (
                    <Loader />
                )}
                {pages > 1 && (
                    <GiphyPagination
                        onPageClicked={this.handlePageClicked}
                        pages={generateArrayFromNumber(pages)}
                        currentPage={currentPage}
                    />
                )}
                <GiphModal
                    toggle={this.toggleModal}
                    isOpened={isModalOpened}
                    imageSrc={selectedImage}
                />
            </Fragment>
        );
    }
}

Grid.propTypes = {
    searchText: PropTypes.string.isRequired,
};

export default Grid;
