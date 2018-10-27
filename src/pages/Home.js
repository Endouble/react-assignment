import React from 'react';

import Layout from '../modules/Layout/Layout.component';
import Header from '../modules/Header';
import PokeDex from '../modules/PokeDex';

const Home = () => (
    <Layout>
        <Header />
        <PokeDex />
    </Layout>
);

export default Home;
