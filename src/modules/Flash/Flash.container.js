import React from 'react';

import Flash from './Flash.component';

import { IsLoadingContext } from '../../context';

const FlashData = () => (
    <IsLoadingContext.Consumer>
        {isLoading => <Flash isLoading={isLoading} />}
    </IsLoadingContext.Consumer>
);

export default FlashData;
