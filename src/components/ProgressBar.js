import React from 'react';

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className="progress-bar-background">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;
