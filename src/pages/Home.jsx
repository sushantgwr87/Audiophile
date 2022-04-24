import React from 'react';
import { Link } from 'react-router-dom';

const productData = [
  {
    path: "/assets/headphone_white2.png",
    head: "Headphones",
    link: "/headphones"
  },
  {
    path: "/assets/earpods_purple2.png",
    head: "Earphones",
    link: "/earphones"
  },
  {
    path: "/assets/speaker_top2.png",
    head: "Speakers",
    link: "/speakers"
  },
]

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
      <div className="product_carousel">
        {productData.map((value, index) =>
          <div className='product_carousel___item' key={index}>
            <div className="carousel_image">
              <img src={value.path} alt="product" />
            </div>
            <div className="carousel_content">
              <h4>{value.head}</h4>
              <Link to={value.link}>
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="featured_product___card">
        <div className="featured_product___image">
          <img src="/assets/speaker.png" alt="product" />
        </div>
        <div className='featured_product___content'>
          <h3>Speaker</h3>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          <button>See Product</button>
        </div>
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