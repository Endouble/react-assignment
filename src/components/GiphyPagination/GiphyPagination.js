import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import './GiphyPagination.scss';

const GiphyPagination = (props) => {
    // handles click on page number, last or first btn
    const handlePageClicked = (page) => {
        const { onPageClicked } = props;
        // call onPageClicked in Grid
        onPageClicked(page);
    };

    const { pages, currentPage } = props;
    return (
        <div className="GiphyPagination">
            <Pagination size="sm">
                <PaginationItem>
                    <PaginationLink
                        previous
                        onClick={() => handlePageClicked(1)}
                    />
                </PaginationItem>
                {pages && pages.map(page => (
                    <PaginationItem
                        key={page}
                        active={currentPage === page - 1}
                    >
                        <PaginationLink onClick={() => handlePageClicked(page)}>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink
                        next
                        onClick={() => handlePageClicked(pages.length)}
                    />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

GiphyPagination.propTypes = {
    currentPage: PropTypes.number,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPageClicked: PropTypes.func.isRequired,
};

GiphyPagination.defaultProps = {
    currentPage: 1,
};

export default GiphyPagination;
