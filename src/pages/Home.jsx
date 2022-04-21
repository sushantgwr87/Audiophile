import React from 'react';
import Card from '../component/Card';

const productCardData =
{
  path: '/assets/headphone_side.png',
  head: 'Bringing you the best audio gear',
  body: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
}

const Home = () => {
  return (
    <>
      <div className='featured_card'>
        <div className='featured_card___photo'>
          <img src={'/assets/headphone_crop3.jpg'} alt='CardImage' />
        </div>
        <div className='featured_card___content'>
          <h5>New Product</h5>
          <h3>XX99 Mark II Headphones</h3>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button>
            See Product
          </button>
        </div>
      </div>
      <div>
        <Card
          cardQuote={productCardData.quote}
          imagePath={productCardData.path}
          cardHead={productCardData.head}
          cardBody={productCardData.body}
          buttonText={productCardData.buttonText}
          isbutton={true}
        />
      </div>
      <div className='advertisement_card'>
        <div className='advertisement_card___photo'>
          <img src={'/assets/headphone_wearing_person.jpg'} alt='CardImage' />
        </div>
        <div className='advertisement_card___content'>
          <h3>Bringing you the <span>best</span> audio gear</h3>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </div>
    </>
  )
}

export default Home