import React from 'react';

import { client, urlFor } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {

  return (
    <div>
      <HeroBanner />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>
          Best Selling Products
        </h2>
        <p>
          Inverters for all your off-grid needs
        </p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name
        )}
      </div>

      <br />
      
      <FooterBanner/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  return {
    props: { products, bannerData }
  }
}

export default Home;