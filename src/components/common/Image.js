import React from 'react';
import styles from './Image.module.css';

const Image = () => {
    return (
        <div className={styles.ImageContainer}>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" alt="Man Technologist Light Skin Tone"/>
        </div>
    );
};

export default Image;