import { useEffect } from 'react';
import Card from '../component/Card';
import { getCategoryProducts } from '../actions/product';

const Headphones = () => {

  useEffect(() => {
    getCategoryProducts("headphones");
  }, [])

  const productData = JSON.parse(sessionStorage.getItem("headphonesProducts"));

  // console.log(productData)

  return (
    <>
      <div className="page_title">
        Headphones
      </div>
      <div className="page_content">
        {productData.map((value, index) =>
          <Card
            key={value._id}
            imagePath={value.path}
            cardQuote={value.quote}
            cardBody={value.caption}
            cardHead={value.longTitle}
            buttonText={"See Product"}
            isbutton={true}
            buttonLink={`/product/${value._id}`}
            isreverse={index % 2 !== 0 && true}
          />
        )}
      </div>
    </>
  )
}

export default Headphones