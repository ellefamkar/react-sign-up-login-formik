import React from 'react';
import UserProfile from '../../images/ellefamkar.jpg';
import styles from './Image.module.css';

const Image = () => {
    return (
        <div className={styles.ImageContainer}>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" alt="Man Technologist Light Skin Tone" width="25" height="25" />
            {/* <img src={UserProfile} alt="UserProfile" /> */}
        </div>
    );
};

export default Image;