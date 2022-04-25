import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../component/Card';

const product = {
    path: "/assets/headphone_side.png",
    quote: "New Product",
    head: "XX99 Mark II Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    buttonText: "See Product"
}

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

const Product = () => {

    const { category, id } = useParams();
    console.log(category)
    console.log(id)

    return (
        <div className='product_page'>
            <Link to={"/"}>Go Back</Link>
            <Card
                imagePath={product.path}
                cardQuote={product.quote}
                cardBody={product.body}
                cardHead={product.head}
                buttonText={product.buttonText}
                productPrice={2999}
                isProduct
                isreverse
            />
            <div className="product_page___feature_container">
                <div className="product_page___feature">
                    <h3>Features</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius alias, deserunt maxime similique quibusdam qui neque dolor non animi mollitia, est praesentium aliquid, cum eligendi eos. Quis, similique sit.</p>
                </div>
                <div className="product_page___box">
                    <h3>In The Box</h3>
                    <ul>
                        <li><span>1x</span>headset</li>
                        <li><span>1x</span>headset</li>
                        <li><span>1x</span>headset</li>
                        <li><span>1x</span>headset</li>
                        <li><span>1x</span>headset</li>
                    </ul>
                </div>
            </div>
            <div className="product_page___grid_image">
                <div className="grid_image___left">
                    <img src={`/assets/${category}/image1.png`} alt="Headphone" />
                    <img src={`/assets/${category}/image2.png`} alt="Headphone" />
                </div>
                <div className="grid_image___right">
                    <img src={`/assets/${category}/image3.png`} alt="Headphone" />
                </div>
            </div>
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
        </div>
    )
}

export default Product