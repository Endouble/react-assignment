import React from 'react';

export const childrenWithProps = (childrens, props) => React.Children.map(childrens, (child, index) =>
    React.cloneElement(child, {
        index,
        ...props,
    }));


export const handlerCurrying = (callback, arg = null) => () => {
    callback(arg);
};
