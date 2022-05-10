import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../component/ProductCarousel';
import { getFeaturedProducts } from '../actions/product';
import useLocalStorage from '../customHook/useLocalStorage';
import Loader from '../component/Loader';
import domainurl from '../domainAPI';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [featuredProducts, setFeaturedProducts] = useLocalStorage("featuredProducts", [])

  useEffect(() => {
    const getData = async () => {
      const data = await getFeaturedProducts();
      if (!data.error) {
        setFeaturedProducts(data.data);
        setIsLoading(false)
      }
    }
    getData();
  }, [])

  if (isLoading) {
    return (
      <Loader />
    )
  }
  else {
    const headphoneData = featuredProducts.find(obj => obj.category === "headphones");
    const speakerOneData = featuredProducts.find(obj => obj.category === "speaker" && obj.title === "ZX9");
    const speakerTwoData = featuredProducts.find(obj => obj.category === "speaker" && obj.title !== "ZX9");
    const earphoneData = featuredProducts.find(obj => obj.category === "earphones");

    return (
      <>
        <div className='featured_card'>
          <div className='featured_card___photo'>
            <img src={domainurl + headphoneData.path} alt='CardImage' />
          </div>
          <div className='featured_card___content'>
            <h5>{headphoneData.quote}</h5>
            <h3>{headphoneData.longTitle}</h3>
            <p>{headphoneData.caption}</p>
            <Link to={`/product/${headphoneData._id}`}>
              See Product
            </Link>
          </div>
        </div>
        <ProductCarousel />
        <div className="featured_product___card_list">
          <div className="featured_product___card">
            <div className="featured_product___image">
              <img src={domainurl + speakerOneData.path} alt='CardImage' />
            </div>
            <div className='featured_product___content'>
              <h3>{speakerOneData.longTitle}</h3>
              <p>{speakerOneData.caption}</p>
              <Link to={`/product/${speakerOneData._id}`}>See Product</Link>
            </div>
          </div>
          <div className="featured_product___card">
            <div className="featured_product___image">
              <img src={domainurl + speakerTwoData.path} alt='CardImage' />
            </div>
            <div className='featured_product___content'>
              <h3>{speakerTwoData.longTitle}</h3>
              <Link to={`/product/${speakerTwoData._id}`}>See Product</Link>
            </div>
          </div>
          <div className="featured_product___card">
            <div className="featured_product___image">
              <img src={domainurl + earphoneData.path} alt='CardImage' />
            </div>
            <div className='featured_product___content'>
              <h3>{earphoneData.longTitle}</h3>
              <Link to={`/product/${earphoneData._id}`}>See Product</Link>
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
}

export default Home