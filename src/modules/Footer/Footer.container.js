import React from 'react';

import Footer from './Footer.component';
import { FilterContext } from '../../pages/Home/Home.component';

const FooterData = () => (
    <FilterContext.Consumer>
        {filter => (<Footer filter={filter} />)}
    </FilterContext.Consumer>
);

export default FooterData;
