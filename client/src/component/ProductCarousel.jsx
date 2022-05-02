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

const ProductCarousel = () => {
    return (
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
    )
}

export default ProductCarousel