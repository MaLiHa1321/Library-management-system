import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../pages/Categories';
import Feature from './Feature';
import Benefit from './Benefit';

const Home = () => {
   
    return (
        <div className='space-y-7'>
            <Banner></Banner>
           <Categories></Categories>
           <Feature></Feature>
           <Benefit></Benefit>
            
        </div>
    );
};

export default Home;