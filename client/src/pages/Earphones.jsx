import React from 'react';
import Card from '../component/Card';

const productData = [
  {
    path: "/assets/earphone_blue.png",
    id: 200,
    quote: "New Product",
    head: "XX99 Mark II Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
  {
    path: "/assets/earphone_green.png",
    id: 201,
    head: "XX99 Mark I Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
  {
    path: "/assets/earphone_aqua.png",
    id: 202,
    head: "X10 Mark Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
  },
]

const Earphones = () => {
  return (
    <>
      <div className="page_title">
        Earphones
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
            buttonLink={`/product/earphone/${value.id}`}
            isreverse={index === 1 && true}
          />
        )}
      </div>
    </>
  )
}

export default Earphones