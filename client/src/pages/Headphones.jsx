import { useEffect, useState } from 'react';
import Card from '../component/Card';
import { getCategoryProducts } from '../actions/product';
import Loader from '../component/Loader';
import useLocalStorage from '../customHook/useLocalStorage';

const Headphones = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [productData, setproductData] = useLocalStorage("headphonesProduct", null)

  useEffect(() => {
    const getData = async () => {
      const data = await getCategoryProducts("headphones");
      if (!data.error) {
        setproductData(data.data);
        setIsLoading(false)
      }
    }
    getData();
  }, [])

  return (
    <>
      <div className="page_title">
        Headphones
      </div>
      {isLoading ? <Loader /> :
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
      }
    </>
  )
}

export default Headphones