import React from 'react';
import Card from '../component/Card';

const introductionData = [
  {
    path: '/assets/headphone_crop2.jpg',
    quote: 'New Product',
    head: 'XX99 Mark II Headphones',
    body: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    buttonText: 'See Product'
  },
  {
    path: '/assets/headphone_wearing_person.jpg',
    head: 'Bringing you the best audio gear',
    body: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
  },
]

const Home = () => {
  return (
    introductionData.map((value, index) =>
      <Card
        cardQuote={value.quote}
        imagePath={value.path}
        cardHead={value.head}
        cardBody={value.body}
        isdark={index > 0 ? false : true}
        isModal={index === 0 && true}
        isbutton={index === 0 && true}
        buttonText={value.buttonText}
        key={index}
      />
    )
  )
}

export default Home