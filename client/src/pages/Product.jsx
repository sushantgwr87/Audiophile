import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../component/Card';
import ProductCarousel from '../component/ProductCarousel';

const product = {
    path: "/assets/headphone_side.png",
    quote: "New Product",
    head: "XX99 Mark II Headphones",
    body: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
}

const Product = () => {

    const { category } = useParams();

    return (
        <div className='product_page'>
            <Link to={"/"}>Go Back</Link>
            <Card
                imagePath={product.path}
                cardQuote={product.quote}
                cardBody={product.body}
                cardHead={product.head}
                productPrice={2999}
                isProduct
                isreverse
            />
            <div className="product_page___feature_container">
                <div className="product_page___feature">
                    <h3>Features</h3>
                    <p>Morning days given saying let herb shall upon created you signs. Land night beast behold signs void shall have i creature said and heaven. Lights moved can't forth you're land brought great spirit. Light over face isn't multiply moveth greater image darkness called divided void there fruitful sixth them shall his a blessed from. Creeping.</p>
                    <br />
                    <p>Stars won't, don't said hath doesn't greater winged darkness itself So shall years they're said. Given light so two beginning bring saying good meat greater there kind fruit, in. Unto gathered very under under image don't one beast, day. All thing land female rule moveth.</p>
                </div>
                <div className="product_page___box">
                    <h3>In The Box</h3>
                    <ul>
                        <li><span>1x</span> {category} unit</li>
                        <li><span>2x</span>Replacement Earcup</li>
                        <li><span>1x</span> User Manual</li>
                        <li><span>1x</span> 5mm Audio cable</li>
                        <li><span>1x</span> Travel Bag</li>
                    </ul>
                </div>
            </div>
            <div className="product_page___grid_image">
                <img src={`/assets/${category}/image1.png`} alt="Product" />
                <img src={`/assets/${category}/image2.png`} alt="Product" />
                <img src={`/assets/${category}/image3.png`} alt="Product" />
            </div>
            <ProductCarousel />
        </div>
    )
}

export default Product