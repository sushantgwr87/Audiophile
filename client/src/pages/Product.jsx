import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../component/Card';
import ProductCarousel from '../component/ProductCarousel';
import { getProduct } from '../actions/product';
import Loader from '../component/Loader';
import useLocalStorage from '../customHook/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cart, setCart] = useLocalStorage("cart", [])
    // console.log(cart)

    const [isLoading, setIsLoading] = useState(true)
    const [product, setproduct] = useLocalStorage("featchedProduct", null)

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            if (!data.error) {
                setproduct(data.data);
                setIsLoading(false)
            }
        }
        getData();
    }, [id])

    const addToCart = (productQuantity) => {
        // if (cart && productQuantity > 0) {
        //     let cartArray = cart
        //     let productIndex = cartArray.findIndex(val => val._id === id);
        //     if (productIndex === -1) {
        //         let productFinalData = { ...product, quantity: productQuantity }
        //         setCart([...cart, productFinalData]);
        //     }
        //     else {
        //         cartArray[productIndex].quantity = productQuantity;
        //         setCart(cartArray);
        //     }
        // }
        // else if (productQuantity === 0) {
        //     setCart(cart.filter(val => val._id !== id));
        // }
        if (cart) {
            let cartArray = cart
            let productIndex = cartArray.findIndex(val => val._id === id);
            if (productQuantity > 0) {
                if (productIndex === -1) {
                    let productFinalData = { ...product, quantity: productQuantity }
                    setCart([...cart, productFinalData]);
                }
                else {
                    cartArray[productIndex].quantity = productQuantity;
                    setCart(cartArray);
                }
            }
            else if (productQuantity === 0 && productIndex === -1) {
                setCart(cart.filter(val => val._id !== id));
            }
        }
    }

    return (
        isLoading ? <Loader /> :
            <div className='product_page'>
                <Link to="#" onClick={() => navigate(-1)}>Go Back</Link>
                <Card
                    imagePath={product.path}
                    cardQuote={product.quote}
                    cardBody={product.description}
                    cardHead={product.longTitle}
                    productPrice={product.price}
                    isProduct
                    isreverse
                    cartFunction={addToCart}
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
                            <li><span>1x</span> {product.category} unit</li>
                            <li><span>2x</span>Replacement Earcup</li>
                            <li><span>1x</span> User Manual</li>
                            <li><span>1x</span> 5mm Audio cable</li>
                            <li><span>1x</span> Travel Bag</li>
                        </ul>
                    </div>
                </div>
                <div className="product_page___grid_image">
                    <img src={`/assets/${product.category}/image1.png`} alt="Product" />
                    <img src={`/assets/${product.category}/image2.png`} alt="Product" />
                    <img src={`/assets/${product.category}/image3.png`} alt="Product" />
                </div>
                <ProductCarousel />
            </div>
    )
}

export default Product