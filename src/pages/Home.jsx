import React from 'react';
import Card from '../component/Card';

const featuredCardData =
{
  path: '/assets/headphone_wearing_person.jpg',
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
          cardQuote={featuredCardData.quote}
          imagePath={featuredCardData.path}
          cardHead={featuredCardData.head}
          cardBody={featuredCardData.body}
          buttonText={featuredCardData.buttonText}
          isbutton={false}
        />
      </div>
    </>
  )
}

export default Home