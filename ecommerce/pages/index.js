import React from 'react';

import { client, urlFor } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {

  return (
    <div>
      {/* Website Banner */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      
      {/* Product Heading */}
      <div className='products-heading'>
        <h2>
          Our Products
        </h2>
        <p>
          Inverters for all your off-grid needs
        </p>
      </div>

      {/* Product Gallery */}
      <div className='products-container'>
        {/* '?' to check if products exists */}
        {products?.map(
          (product) => <Product key={product._id} product={product} />
        )}
      </div>

      <br />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />

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