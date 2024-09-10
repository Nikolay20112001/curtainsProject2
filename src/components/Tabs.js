import React from 'react';

const Tabs = ({ steps, currentStep, setCurrentStep, setTextExpandedArray }) => {
    return (
        <div className="tab-container">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`tab-item ${step.styleClass} ${currentStep === index ? 'active' : ''}`}
                    onClick={() => {
                        setCurrentStep(index);
                        setTextExpandedArray(new Array(steps.length).fill(false));
                    }}
                >
                    {step.title}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
