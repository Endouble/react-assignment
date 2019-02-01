import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Image.scss';

const Image = (props) => {
    const { src, alt, shareSrc, isExpandClicked, originalSrc, isCopiedClicked } = props;

    const onBtnShareClicked = () => {
        // open facebook sharer dialog
        const facebookWindow = window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareSrc}`, 'facebook-popup', 'height=350,width=600');
        if (facebookWindow.focus) {
            facebookWindow.focus();
        }
    };

    // handle expand click
    const OnBtnExpandClicked = () => {
        isExpandClicked(originalSrc);
    };

    // handle copy click
    const onBtnCopyClicked = () => {
        // copy to clipboard
        navigator.clipboard.writeText(originalSrc);
        // pass to Grid component that image was copied
        isCopiedClicked();
    };

    return (
        <div className="Image">
            <img
                src={src}
                alt={alt}
            />
            <div className="Image__Overlay">
                <button
                    onClick={onBtnCopyClicked}
                    type="button"
                    className="OverLay__BtnCopy"
                    title="copy"
                >
                    <i className="far fa-copy" />
                </button>
                <button
                    onClick={OnBtnExpandClicked}
                    type="button"
                    className="OverLay__BtnExpand"
                    title="expand"
                >
                    <i className="fas fa-expand-arrows-alt" />
                </button>
                <button
                    onClick={onBtnShareClicked}
                    type="button"
                    className="OverLay__BtnShare"
                    title="share"
                >
                    <i className="fas fa-share-alt" />
                </button>
            </div>
        </div>
    );
};

Image.propTypes = {
    isExpandClicked: PropTypes.func.isRequired,
    isCopiedClicked: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    originalSrc: PropTypes.string.isRequired,
    shareSrc: PropTypes.string,
};

Image.defaultProps = {
    shareSrc: 'https://giphy.com/',
};

export default Image;
