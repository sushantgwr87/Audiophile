import {useEffect} from 'react';
import Card from '../component/Card';
import { getCategoryProducts } from '../actions/product';

const Earphones = () => {

  useEffect(() => {
    getCategoryProducts("earphones");
  }, [])

  const productData = JSON.parse(sessionStorage.getItem("earphonesProducts"));

  return (
    <>
      <div className="page_title">
        Earphones
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

export default Earphones