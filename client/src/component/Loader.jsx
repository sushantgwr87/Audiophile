import React from 'react'
import styles from '../styles/loader.module.css'

const Loader = () => {
    return (
        // <div id="loader" className={styles.loader_wrapper}>
        //     <div className={styles.loader_logo}>
        //         <svg id="loader_logo" data-name="loader_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
        //             <circle className={styles.loader_circle} strokeDasharray="942" strokeDashoffset="942" cx="153" cy="153" r="150" />
        //             <path className={`${styles.letter} ${styles.G_up_part}`} d="M741.2,335.9c-.1,1.2-.2,2.3-.3,4l5.1-.4c1.6-7.7,3.1-14.9,4.7-22.8h-.2l-9.3,13.8A48.3,48.3,0,0,1,741.2,335.9Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.G_mid_part}`} d="M694.7,367.4a54.6,54.6,0,0,1-2.2-25.1c2.9-22.6,17.3-33.4,37.3-28.2,6.7,1.7,9.3,3.9,9.8,9.5l9.2-13.9c-6.6-1.3-13-2.8-19.4-3.7-25.3-3.6-44,12.5-47.6,40.5-.4,3.1-2.3,24.4,10.1,36.4a35.1,35.1,0,0,0,5.5,4.4l5-7.6A30.1,30.1,0,0,1,694.7,367.4Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.G_down_part}`} d="M747,364.7a11.1,11.1,0,0,1,2.2-5.2,10.3,10.3,0,0,1,2.2-2.1l-.9-2.3c-4.1.1-8.6.1-13.2-.2s-7.8-.5-11.4-.9a23.5,23.5,0,0,1-.3,3.4,15.6,15.6,0,0,1-1.2,3.5c3.8-.2,6.9.3,9.2.3s5.7,2.1,5.6,6.4-.2,9.8-.7,14.6a6,6,0,0,1-2.4,3.8c-10,5.6-21,4-28.8-3.1l-4.9,7.6a34.5,34.5,0,0,0,10.1,4.2,46.1,46.1,0,0,0,6.8.7c8,.5,13.3-.8,24-3.5a3.8,3.8,0,0,0,2.4-1.3,4,4,0,0,0,.8-1.8,68.5,68.5,0,0,1-.6-8.1,78.3,78.3,0,0,1,0-8.5A42.5,42.5,0,0,1,747,364.7Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.S_up_part}`} d="M655.5,327c.9,3.4.2,7.2.2,11.4l6.3-.4c1.9-13.1,2.7-18.6,3-21.1,0-.3.6-4.9.6-4.9l-1-.3-9.4,14.6Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.S_down_part}`} d="M619.5,369.5a38,38,0,0,1-1.2-11.4h-5.5a62.1,62.1,0,0,1,.2,13.5c-.3,3.2-1.2,9.3-1.2,9.3h.3l7.5-11.2A.4.4,0,0,0,619.5,369.5Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.S_upCurve_part}`} d="M623.8,332.6c-6.7-5.5-5.6-14,2-18.3a24.1,24.1,0,0,1,22-1c2.4.9,4.2,4.2,5.1,6.9l8.7-12.9-3.8-1a63.2,63.2,0,0,0-17.8-1.9c-10.4,0-19.7,3.2-26.4,11.4s-6.4,19.6,2.6,26.9c4.4,3.5,9.7,6.1,14.6,9l.7.4,6.9-10.4C633.4,338.9,628.2,336.2,623.8,332.6Z" transform="translate(-527.5 -196.5)" />
        //             <path className={`${styles.letter} ${styles.S_downCurve_part}`} d="M659.7,354.4c-4.9-3.5-10.7-5.9-15.9-9l-.8-.5-7,10.3c5.1,2.9,10.3,5.5,15.2,8.7s6.8,7.6,5.5,13.2a12.2,12.2,0,0,1-10,9.8,54.7,54.7,0,0,1-14.6,1.1c-3.3-.2-5.8-1-7.6-2.5s-2.9-4.1-3.8-7.5l-7.5,11.2c1.7.7,13.7,5.5,26.9,5.1a29,29,0,0,0,7.3-.8,30.9,30.9,0,0,0,14.9-8.8C671.7,374.8,670.8,362.4,659.7,354.4Z" transform="translate(-527.5 -196.5)" />
        //         </svg>
        //     </div>
        // </div>
        <div className={styles.ldshourglass}></div>
    )
}

export default Loader