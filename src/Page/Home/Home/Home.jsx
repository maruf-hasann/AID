import React from 'react';
import Header from '../../../Components/Header/Header';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Footer from '../../../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Product />
            <Footer/>
        </>
    );
};

export default Home;