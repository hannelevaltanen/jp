import React from 'react';

import styles from './Social.module.css'

const Social = ({ fb, ig }) => {
    return (
        <div className={styles.social}>
            <div className={styles.socialText}>Ollaan yhteydessä</div>
            <ul className="list">
                <li>
                    <a href={fb} target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Facebook</title>
                            <path  d="M17 2.88232H14C11.2386 2.88232 9 5.32349 9 8.33481V11.6063H6V15.9683H9V24.6923H13V15.9683H16L17 11.6063H13V8.33481C13 7.73255 13.4477 7.24432 14 7.24432H17V2.88232Z" fill="white" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={ig} target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram</title>
                            <path d="M2 7.88233C2 5.1209 4.23858 2.88232 7 2.88232H17C19.7614 2.88232 22 5.1209 22 7.88232V19.6923C22 22.4537 19.7614 24.6923 17 24.6923H7C4.23858 24.6923 2 22.4537 2 19.6923V7.88233Z" stroke="white" strokeWidth="2" />
                            <path d="M16.0001 13.1003C16.2532 14.9617 15.3831 16.7904 13.8417 17.6364C12.3003 18.4824 10.4351 18.1552 9.2149 16.8245C7.99469 15.4939 7.69455 13.4599 8.47038 11.779C9.24621 10.0981 10.9231 9.14928 12.6301 9.42531C14.373 9.70716 15.7416 11.1996 16.0001 13.1003Z" stroke="white" strokeWidth="2" />
                            <ellipse cx="18" cy="7.24431" rx="1" ry="1.0905" fill="white" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social;
