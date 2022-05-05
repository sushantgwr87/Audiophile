import { useState } from 'react';
import AdminAuth from '../component/AdminAuth';
import { imageUpload, productUpload } from '../actions/upload';

const Admin = () => {

    const [image, setImage] = useState("/assets/addImage.png");
    const [createObjectURL, setCreateObjectURL] = useState("/assets/addImage.png");

    const [formData, setFormData] = useState({
        title: "",
        quote: "",
        price: 1000,
        caption: "",
        description: "",
        feature: false,
        category: "headphones",
    });

    const { title, price, caption, description, quote, category } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const imageResult = await imageUpload(image)
        console.log(imageResult);
        if (imageResult.message) {
            let productData = {
                ...formData,
                path: imageResult.path,
            }
            console.log(productData);
            productUpload(productData);
        }
        console.log(formData)
    }

    const auth = true;

    return (
        <div className='admin_page'>
            {auth ? <div className="admin_page_form">
                <h2>Add New Story</h2>
                <form method='post' onSubmit={handleOnSubmit}>
                    <div className="upload_form_image">
                        <label htmlFor="productImage">
                            <div className="upload_image">
                                <img src={createObjectURL} alt="upload_Image" />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            onChange={handleImage}
                            accept=".png, .jpg, .jpeg"
                            hidden
                        />
                    </div>
                    <div className="upload_content">
                        <label htmlFor="title">Title</label>
                        <input
                            className="upload_content___input"
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="category">Category</label>
                        <select name='category' id='category' value={category} onChange={(e) => onChange(e)}>
                            <option value="headphones">Headphones</option>
                            <option value="speaker">Speaker</option>
                            <option value="earphones">Earphones</option>
                        </select>
                        <label htmlFor="quote">quote</label>
                        <input
                            className="upload_content___input"
                            name="quote"
                            id="quote"
                            type="text"
                            placeholder="Enter Quote"
                            value={quote}
                            onChange={(e) => onChange(e)}
                        />
                        <label htmlFor="caption">Caption</label>
                        <textarea
                            className="upload_content___input"
                            name="caption"
                            id="caption"
                            placeholder="Enter Caption"
                            rows="3"
                            value={caption}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="description">description</label>
                        <textarea
                            className="upload_content___input"
                            name="description"
                            id="description"
                            placeholder="Enter Description"
                            rows="10"
                            value={description}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            className="upload_content___input"
                            name="price"
                            id="price"
                            type="number"
                            placeholder="Enter Product Price"
                            value={price}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="feature">Is this a Featured Product?</label>
                        <div className='upload_content___radio_inputs'>
                            <input
                                name='feature'
                                id='feature'
                                type="radio"
                                value={true}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <label htmlFor="feature">Yes</label>
                            <input
                                name='feature'
                                id='feature'
                                type="radio"
                                value={false}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            <label htmlFor="feature">No</label>
                        </div>
                    </div>
                    <button className="upload_form___btn" type="submit">
                        Upload to server
                    </button>
                </form>
            </div>
                :
                <AdminAuth />
            }
        </div>
    )
}

export default Admin