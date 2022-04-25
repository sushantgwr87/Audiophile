import React from 'react';
import Card from '../component/Card';

const productData = [
  {
    path: "/assets/headphone_side.png",
    id: 100,
    quote: "New Product",
    head: "XX99 Mark II Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
  {
    path: "/assets/headphone_white2.png",
    id: 101,
    head: "XX99 Mark I Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
  {
    path: "/assets/headphone_red.png",
    id: 102,
    head: "X10 Mark Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
]

const Headphones = () => {
  return (
    <>
      <div className="page_title">
        Headphones
      </div>
      <div className="page_content">
        {productData.map((value, index) =>
          <Card
            key={index}
            imagePath={value.path}
            cardQuote={value.quote}
            cardBody={value.body}
            cardHead={value.head}
            buttonText={value.buttonText}
            isbutton={true}
            buttonLink={`/product/headphone/${value.id}`}
            isreverse={index === 1 && true}
          />
        )}
      </div>
    </>
  )
}

export default Headphones