import React from 'react';

import styles from './Circle.module.scss'

const Circle = ({ number }) => {
    return (
        <div className={styles.circle}>
            { number }
        </div>
    )
}

export default Circle;
