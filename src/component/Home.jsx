import React from 'react';
import Card from './Card';

const introductionData = [
  {
    path: '/assets/headphone_crop2.jpg',
    head: 'create and share your photo stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    buttonText: 'See Product'
  },
  {
    path: '',
    head: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text and embed media from other networks, Then share your story with everyone',
    buttonText: 'View the Stories'
  },
  {
    path: '',
    head: 'Designed for Everyone',
    body: 'Photosnap can help you create stories that resonates with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
    buttonText: 'View the Stories'
  },
]

const Home = () => {
  return (
    introductionData.map((value, index) => (
      <Card
        cardQuote={"New Product"}
        imagePath={value.path}
        cardHead={value.head}
        cardBody={value.body}
        isdark={index > 0 ? false : true}
        isModal={index === 0 && true}
        isreverse={index === 1 && true}
        buttonText={value.buttonText}
        key={index}
      />
    ))
  )
}

export default Home