import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../component/ProductCarousel';
import { getFeaturedProducts } from '../actions/product';

const Home = () => {

  useEffect(() => {
    getFeaturedProducts();
    // getCategoryProducts("headphones");
  }, [])
  
  return (
    <>
      <div className='featured_card'>
        <div className='featured_card___photo'>
          {/* <img src={process.env.REACT_APP_PUBLIC_API_URL+'/assets/headphone_crop.png'} alt='CardImage' /> */}
          <img src={'/assets/headphone_crop.png'} alt='CardImage' />
        </div>
        <div className='featured_card___content'>
          <h5>New Product</h5>
          <h3>XX99 Mark II Headphones</h3>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to={`/product/headphone/${4}`}>
            See Product
          </Link>
        </div>
      </div>
      <ProductCarousel />
      <div className="featured_product___card_list">
        <div className="featured_product___card">
          <div className="featured_product___image">
            <img src="/assets/speaker2.png" alt="product" />
          </div>
          <div className='featured_product___content'>
            <h3>ZX9 Speaker</h3>
            <p>Upgrade to premium speakers that phenomenally build to deliver truly remarkable sound</p>
            <Link to={`/product/speaker/${1}`}>See Product</Link>
          </div>
        </div>
        <div className="featured_product___card">
          <div className="featured_product___image">
            <img src="/assets/bluetooth_speaker.png" alt="product" />
          </div>
          <div className='featured_product___content'>
            <h3>ZX7 Speaker</h3>
            <Link to={`/product/speaker/${2}`}>See Product</Link>
          </div>
        </div>
        <div className="featured_product___card">
          <div className="featured_product___image">
            <img src="/assets/earphone.png" alt="product" />
          </div>
          <div className='featured_product___content'>
            <h3>YX1 Earphones</h3>
            <Link to={`/product/earphone/${3}`}>See Product</Link>
          </div>
        </div>
      </div>
      <div className='advertisement_card'>
        <div className='advertisement_card___photo'>
          <img src={'/assets/headphone_wearing_person.png'} alt='CardImage' />
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