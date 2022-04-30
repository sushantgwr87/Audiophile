import { useState, useEffect } from 'react';
import styles from '../styles/admin.module.css'

const AdminAuth = () => {

    const [login, setLogin] = useState({
        user: "",
        password: ""
    })

    const [error, setError] = useState(false);

    const handleSubmit = () => {

    }

    return (
        <div className={styles.admin_auth}>
            <h2>Admin Login</h2>
            <form method="post" onSubmit={handleSubmit} className={styles.admin_form___auth}>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="password" required />
                <p>{error && "Either username or password is incorrect"}</p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default AdminAuth