import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import Icon from '../Icon';

const Footer = () => {
    const portfolioLink = "https://sushantgangwar.netlify.app/";
    const githubLink = "https://github.com/sushantgwr87";
    const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_Logo}>
                <Icon name="AudioName" />
            </div>
            <ul className={styles.footer_navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/headphones">Headphones</Link></li>
                <li><Link to="/speakers">Speakers</Link></li>
                <li><Link to="/earphones">Earphones</Link></li>
            </ul>
            <p className={styles.footer_note}>
                Audiophile Ecommerce Website project, made by Sushant Gangwar, is for purchasing audio accessories for all music lovers.
            </p>
            <div className={styles.footer_copyright}>
                <h3>Copyright 2022. All Rights Reserved.</h3>
            </div>
            <div className={styles.footer_outLinks}>
                <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                    <Icon name="portfolio" width={'38px'} />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" fill={'#fff'} width={'40px'} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" fill={'#fff'} width={'40px'} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;