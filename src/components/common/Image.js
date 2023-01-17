import React from 'react';
import UserProfile from '../../images/ellefamkar.jpeg';

const Image = ({className}) => {
    return (
        <div className={className}>
            <image src={UserProfile} alt="UserProfile" />
        </div>
    );
};

export default Image;