import { useState } from 'react';
import AdminAuth from '../component/AdminAuth';
import styles from '../styles/admin.module.css';

const Admin = () => {

    const [image, setImage] = useState("/assets/addImage.png");
    const [createObjectURL, setCreateObjectURL] = useState("/assets/addImage.png");

    const [formData, setFormData] = useState({
        title: "",
        quote: "",
        price: 1000,
        body: "",
        feature: false,
    });

    const { title, price, body, quote } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    console.log(formData)

    const auth = true;

    return (
        <div className='admin_page'>
            {auth ? <div className="admin_page_form">
                <h2>Add New Story</h2>
                <form method='post'>
                    <div className="upload_form_image">
                        <label htmlFor="imgUpload">
                            <div className="upload_image">
                                <img src={createObjectURL} alt="upload_Image" />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="imgUpload"
                            name="storyImage"
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
                        <label htmlFor="body">Body</label>
                        <textarea
                            className="upload_content___input"
                            name="body"
                            id="body"
                            placeholder="Enter Body"
                            rows="10"
                            value={body}
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